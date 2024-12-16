import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("Token:", token);
  console.log("Pathname:", request.nextUrl.pathname);
  const { pathname } = request.nextUrl;
  if (!token) {
    console.log("No token found, redirecting...");
  }

  if (pathname.startsWith("/api") && !token) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",          
    "/dashboard/:path*", 
    "/api/discover",
    "/api/discover/[id]",
    "/api/movies/:path*",
    "/api/movies/[id]",
    "/api/movies/search",
    "/api/shows/:path*",
    "/api/shows/[id]",
    "/api/shows/search",
  ],
};
