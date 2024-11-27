"use client";
import { AppSidebar } from "@/app/dashboard/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./components/app-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <Navbar /> {/* Navbar avec SidebarTrigger intégré */}
        <AppSidebar />
        <main className="flex-1 pt-14">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
