import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      apiKey?: string; 
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    apiKey?: string; 
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    apiKey?: string;
  }
}
