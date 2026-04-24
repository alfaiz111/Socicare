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
  FileTextIcon,
  Settings2Icon,
  CircleHelpIcon,
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
    {
      title: "Donatur",
      url: "/donatur",
      icon: <UsersIcon />,
    },
    {
      title: "Pegawai",
      url: "/pegawai",
      icon: <UsersIcon />,
    },
    {
      title: "Penggalang Dana",
      icon: <FolderIcon />,
      url: "#",
      items: [
        { title: "Penggalang Dana", url: "/penggalang-dana" },
        { title: "Verifikasi Akun", url: "/penggalang-dana/verifikasi" },
      ],
    },
    {
      title: "Campaign",
      icon: <FolderIcon />,
      url: "#",
      items: [
        { title: "Campaign", url: "/campaign" },
        { title: "Berita", url: "/berita" },
        { title: "Kategori", url: "/kategori" },
      ],
    },
    {
      title: "Transaksi Donasi",
      url: "/transaksi",
      icon: <FileTextIcon />,
    },
    {
      title: "Artikel Blog",
      url: "/blog",
      icon: <FileTextIcon />,
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
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard" className="flex items-center gap-2">
                <CommandIcon className="size-5" />
                <span className="text-base font-semibold">
                  Socicare CMS
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

    </Sidebar>
  )
}