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
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",          
    "/dashboard/:path*", 
    "/api/discover",
    "/api/movies/:path*",
    "/api/shows/:path*",
  ],
};
