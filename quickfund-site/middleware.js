import { NextResponse } from "next/server";

// The /guide/f&b legacy redirect lives here rather than in next.config.mjs:
// config redirects use path-to-regexp, which does not match a literal "&"
// in the source path. Middleware sees the real pathname and can.
export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname === "/guide/f&b" || pathname === "/guide/f%26b") {
    const url = req.nextUrl.clone();
    url.pathname = "/guide/f-and-b";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: "/guide/:path*" };
