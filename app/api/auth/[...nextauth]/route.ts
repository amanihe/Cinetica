import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { user } from "@/app/repository/user";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};
      
        if (!username || !password) {
          return null; // Retourne null si les champs sont vides
        }
      
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (username === user.username && isMatch) {
          return { id: user.id.toString(), email: user.username }; // Succès
        }
      
        return null; // Retourne null si les identifiants sont incorrects
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.apiKey = process.env.TMDB_API_KEY; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token.apiKey) {
        session.user.apiKey = token.apiKey;
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // Redirection vers la page de connexion
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
