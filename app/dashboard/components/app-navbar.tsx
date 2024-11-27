import { Clapperboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-white shadow z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">  
        <SidebarTrigger /> 
        <Clapperboard className="h-6 w-6 text-black" />
          <span className="text-xl font-semibold">Cinetica</span>
        </div>
      </div>

      <div className="w-1/3">
        <Input
          type="text"
          placeholder="Search for movies, shows..."
          className="w-full border-gray-300 rounded-md"
        />
      </div>
    </nav>
  );
}
