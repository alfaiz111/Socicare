"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  LayoutDashboardIcon,
  FolderIcon,
  UsersIcon,
  CameraIcon,
  FileTextIcon,
  Settings2Icon,
  CircleHelpIcon,
  SearchIcon,
  CommandIcon,
} from "lucide-react"

const data = {
  user: {
    name: "Admin CMS",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
  ],

  navCampaign: [
    {
      title: "Manajemen Campaign",
      icon: <FolderIcon />,
      url: "#",
      items: [
        { title: "Semua Campaign", url: "/campaign" },
        { title: "Tambah Campaign", url: "/campaign/create" },
        { title: "Campaign Aktif", url: "/campaign/active" },
        { title: "Campaign Selesai", url: "/campaign/finished" },
      ],
    },
  ],

  navDonation: [
    {
      title: "Donasi",
      icon: <FileTextIcon />,
      url: "#",
      items: [
        { title: "List Donasi", url: "/donasi" },
        { title: "Verifikasi Donasi", url: "/donasi/verifikasi" },
      ],
    },
  ],

  navDistribution: [
    {
      title: "Penyaluran",
      icon: <CameraIcon />,
      url: "#",
      items: [
        { title: "Input Penyaluran", url: "/penyaluran/create" },
        { title: "Laporan Penyaluran", url: "/penyaluran" },
      ],
    },
  ],

  navUsers: [
    {
      title: "Users",
      url: "/users",
      icon: <UsersIcon />,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
    },
    {
      title: "Help",
      url: "#",
      icon: <CircleHelpIcon />,
    },
    {
      title: "Search",
      url: "#",
      icon: <SearchIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <CommandIcon className="size-5" />
                <span className="text-base font-semibold">Socicare CMS</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navCampaign} />
        <NavMain items={data.navDonation} />
        <NavMain items={data.navDistribution} />
        <NavMain items={data.navUsers} />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}