import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "codovate2026";

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true, message: "Authenticated" });
      // Set secure HTTP-only session cookie
      response.cookies.set("cf_admin_auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid admin password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const isAuthenticated = cookieHeader.includes("cf_admin_auth=true");

  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("cf_admin_auth");
  return response;
}
