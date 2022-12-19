import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - video (video files)
   * - icon (icon files)
   * - ogp.webp
   * - robots.txt
   * - sitemap.xml
   */
  if (
    !req.nextUrl.pathname.startsWith("/_next/static") &&
    !req.nextUrl.pathname.startsWith("/video") &&
    !req.nextUrl.pathname.startsWith("/icon") &&
    req.nextUrl.pathname !== "/" &&
    req.nextUrl.pathname !== "/ogp.webp" &&
    req.nextUrl.pathname !== "/robots.txt" &&
    req.nextUrl.pathname !== "/sitemap.xml"
  )
    return NextResponse.redirect(new URL("/", req.url));
}
