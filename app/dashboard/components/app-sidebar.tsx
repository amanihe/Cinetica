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
    <Sidebar className="bg-white dark:text-white text-black">
      <SidebarContent className="dark:bg-gray-900">
        <SidebarGroup>
          <div className="md:p-6"></div>
          <SidebarMenuButton asChild>
            <a href="/dashboard/discover">
              <Grid className="dark:text-white" />
              <span>Discover</span>
            </a>
          </SidebarMenuButton>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">Movies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MoviesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="dark:text-white" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">TV Shows</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TvShowItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="dark:text-white" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto p-4 border-t dark:border-gray-700">
        <button
          className="flex items-center gap-2 text-black hover:text-red-800 dark:text-white dark:hover:text-red-400"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut className="dark:text-white" />
          <span>Logout</span>
        </button>
      </div>
    </Sidebar>
  )
}
