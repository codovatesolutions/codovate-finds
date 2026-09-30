import { NextResponse } from "next/server";
import crypto from "crypto";

function getSessionSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !secret.trim()) {
    return null;
  }
  return secret;
}

function createSignedSessionToken(ttlMs: number = 12 * 60 * 60 * 1000): string | null {
  const secret = getSessionSecret();
  if (!secret) return null;
  const exp = Date.now() + ttlMs;
  const signature = crypto
    .createHmac("sha256", secret)
    .update(String(exp))
    .digest("hex");
  return `${exp}.${signature}`;
}

function verifySignedSessionToken(token: string | null): boolean {
  const secret = getSessionSecret();
  if (!secret || !token || !token.includes(".")) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [expStr, signature] = parts;
  const exp = parseInt(expStr, 10);
  if (isNaN(exp) || Date.now() > exp) {
    return false; // Expired session token or malformed payload
  }

  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(expStr)
    .digest("hex");

  if (signature.length !== expectedSig.length) return false;
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSig)
  );
}

function verifyAdminPassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !adminPassword.trim()) return false;
  const inputBuf = Buffer.from(input);
  const expectedBuf = Buffer.from(adminPassword);
  if (inputBuf.length !== expectedBuf.length) return false;
  return crypto.timingSafeEqual(inputBuf, expectedBuf);
}

// Basic in-memory rate limiting for single-process serverless instances.
// Note: In distributed Vercel serverless deployments, this acts as a lightweight best-effort limiter.
// For enterprise distributed rate limiting, integrate Upstash Redis or Vercel KV.
const failedAttemptsMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = getSessionSecret();

    if (!adminPassword || !adminPassword.trim() || !sessionSecret) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Admin authentication is disabled because ADMIN_PASSWORD or ADMIN_SESSION_SECRET environment variable is not configured.",
        },
        { status: 503 }
      );
    }

    const rawIp = request.headers.get("x-forwarded-for") || "client_ip";
    const ip = rawIp.split(",")[0].trim();
    const now = Date.now();
    const attemptRecord = failedAttemptsMap.get(ip);

    if (attemptRecord && attemptRecord.resetTime > now) {
      if (attemptRecord.count >= 5) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many failed attempts. Please try again in 5 minutes.",
          },
          { status: 429 }
        );
      }
    } else {
      failedAttemptsMap.set(ip, { count: 0, resetTime: now + 5 * 60 * 1000 });
    }

    const { password } = await request.json();

    if (typeof password === "string" && verifyAdminPassword(password)) {
      failedAttemptsMap.delete(ip);
      const sessionToken = createSignedSessionToken();

      if (!sessionToken) {
        return NextResponse.json(
          { success: false, message: "Server configuration error generating session" },
          { status: 500 }
        );
      }

      const response = NextResponse.json({
        success: true,
        message: "Authenticated successfully",
      });

      response.cookies.set("cf_admin_session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 12, // 12-hour expiry
        path: "/",
      });

      return response;
    }

    // Record failed attempt
    const current = failedAttemptsMap.get(ip) || {
      count: 0,
      resetTime: now + 5 * 60 * 1000,
    };
    failedAttemptsMap.set(ip, {
      count: current.count + 1,
      resetTime: current.resetTime,
    });

    return NextResponse.json(
      { success: false, message: "Invalid admin password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error processing authentication" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = getSessionSecret();

    if (!adminPassword || !adminPassword.trim() || !sessionSecret) {
      return NextResponse.json({ authenticated: false, configured: false });
    }

    const cookieHeader = request.headers.get("cookie") || "";
    const match = cookieHeader.match(/cf_admin_session=([^;]+)/);
    const sessionToken = match ? match[1] : null;

    const isAuthenticated = verifySignedSessionToken(sessionToken);
    return NextResponse.json({ authenticated: isAuthenticated, configured: true });
  } catch {
    return NextResponse.json({ authenticated: false, configured: false });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("cf_admin_session");
  return response;
}
