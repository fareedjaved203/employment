import { NextResponse } from "next/server";

export function middleware(request) {
  const cookies = request?.cookies?.get("user") || null;
  let user;
  if (cookies) user = JSON.parse(cookies?.value);
  if (!cookies || !user?.role == "admin" || !user?.token)
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/", "/job-seekers/:path*", "/sponsors/:path*"],
};
