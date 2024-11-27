import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("Token:", token); // Affiche le jeton s'il existe
  console.log("Pathname:", request.nextUrl.pathname);
  const { pathname } = request.nextUrl;
  if (!token) {
    console.log("No token found, redirecting...");
  }

  if (pathname.startsWith("/api") && !token) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  if (pathname.startsWith("/auth") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",          
    "/auth/:path*", 
    "/api/discover",
    "/api/movies/:path*",
    "/api/shows/:path*",
  ],
};
