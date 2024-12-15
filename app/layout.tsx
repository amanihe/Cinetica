"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { ApplicationRepositoryProvider } from "./repository/ApplicationRepositoryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body lang="en" className="h-full overflow-hidden">
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <ApplicationRepositoryProvider>
              {children}
            </ApplicationRepositoryProvider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
