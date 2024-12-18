"use client";
import { AppSidebar } from "@/app/dashboard/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./components/app-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex h-full overflow-hidden">
      <SidebarProvider>
        <Navbar /> 
        <AppSidebar />
        <main className="flex-1 pt-14 overflow-auto">
          {children}
        </main>
      </SidebarProvider>
      </div>
    </>
  );
}
