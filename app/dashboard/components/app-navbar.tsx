import { Clapperboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "./theme-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) {
        router.replace(`${window.location.pathname}?query=${query}`);
      } else {
        router.replace(window.location.pathname);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-white shadow-md z-50 dark:bg-gray-900 dark:text-white text-black">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <Clapperboard className="h-6 w-6 text-black dark:text-white" />
          <span className="text-xl font-semibold">Cinetica</span>
        </div>
      </div>
      <div className="w-1/4">
        <Input
          type="text"
          placeholder="Search now ..."
          className="w-full border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ThemeToggle />
    </nav>
  );
}
