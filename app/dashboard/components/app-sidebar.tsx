import { Grid, Tv, Film,Smile, Star,LogOut } from "lucide-react"
import { signOut } from "next-auth/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const MoviesItems = [

  {
    title: "Now Playing",
    url: "/dashboard/movies/now-playing",
    icon: Film,
  },
  {
    title: "Popular",
    url: "/dashboard/movies/popular",
    icon: Smile,
  },
  {
    title: "Top Rated",
    url: "/dashboard/movies/top-rated",
    icon: Star,
  }
]
const TvShowItems = [
  {
    title: "On The Air",
    url: "/dashboard/shows/on-the-air",
    icon: Tv,
  },
  {
    title: "Popular",
    url: "/dashboard/shows/popular",
    icon: Smile,
  },
  {
    title: "Top Rated",
    url: "/dashboard/shows/top-rated",
    icon: Star,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="md:p-6"></div>
          <SidebarMenuButton asChild>
                    <a href="/dashboard/discover">
                    <Grid />
                      <span>Discover</span>
                    </a>
                  </SidebarMenuButton>
          <SidebarGroupLabel>Movies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MoviesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>TV Shows</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TvShowItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto p-4 border-t">
        <button
          className="flex items-center gap-2 text-black hover:text-red-800"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </Sidebar>
  )
}
