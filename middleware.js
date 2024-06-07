import { NextResponse } from "next/server";

export function middleware(request) {
  const cookies = request?.cookies?.get("user") || null;
  console.log(cookies);
  let user;
  if (cookies) user = JSON.parse(cookies?.value);
  if (!cookies || !user?.token)
    return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/", "/job-seekers/:path*", "/sponsors/:path*"],
};
