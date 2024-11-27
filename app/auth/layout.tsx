"use client";
import { AppSidebar } from "@/app/auth/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "./components/app-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 pt-14">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
