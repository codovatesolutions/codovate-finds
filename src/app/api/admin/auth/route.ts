import { NextResponse } from "next/server";
import crypto from "crypto";

const SERVER_SALT = "cf_sec_salt_2026_prod_key_v1";

function getExpectedToken(): string {
  const adminPassword = process.env.ADMIN_PASSWORD || "codovate2026";
  return crypto.createHmac("sha256", SERVER_SALT).update(adminPassword).digest("hex");
}

// Basic in-memory rate limiting against brute force attempts
const failedAttemptsMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "client_ip";
    const now = Date.now();
    const attemptRecord = failedAttemptsMap.get(ip);

    if (attemptRecord && attemptRecord.resetTime > now) {
      if (attemptRecord.count >= 5) {
        return NextResponse.json(
          { success: false, message: "Too many failed attempts. Try again in 5 minutes." },
          { status: 429 }
        );
      }
    } else {
      failedAttemptsMap.set(ip, { count: 0, resetTime: now + 5 * 60 * 1000 });
    }

    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "codovate2026";

    if (password === adminPassword) {
      failedAttemptsMap.delete(ip);
      const expectedToken = getExpectedToken();
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      
      response.cookies.set("cf_admin_session", expectedToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 12, // 12 hours
        path: "/",
      });

      return response;
    }

    // Record failed attempt
    const current = failedAttemptsMap.get(ip) || { count: 0, resetTime: now + 5 * 60 * 1000 };
    failedAttemptsMap.set(ip, { count: current.count + 1, resetTime: current.resetTime });

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
    const cookieHeader = request.headers.get("cookie") || "";
    const expectedToken = getExpectedToken();
    const match = cookieHeader.match(/cf_admin_session=([^;]+)/);
    const sessionToken = match ? match[1] : null;

    const isAuthenticated = sessionToken === expectedToken;
    return NextResponse.json({ authenticated: isAuthenticated });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("cf_admin_session");
  return response;
}
