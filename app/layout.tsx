"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ApplicationRepositoryProvider } from "./repository/interfaces/ApplicationRepositoryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

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
