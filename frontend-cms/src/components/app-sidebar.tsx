"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Truck,
  Users,
  PieChart,
  Settings2,
  CircleHelp,
  Search,
  Command,
} from "lucide-react";

const data = {
  user: {
    name: "Admin CMS",
    email: "admin@socicare.id",
    avatar: "/avatars/admin.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: <LayoutDashboard className="size-4" />,
    },
    {
      title: "Manajemen Campaign",
      icon: <Megaphone className="size-4" />,
      url: "/campaign",
      items: [
        { title: "Semua Campaign", url: "/campaign" },
        { title: "Tambah Campaign", url: "/campaign/create" },
      ],
    },
    {
      title: "Verifikasi Donasi",
      icon: <ShieldCheck className="size-4" />,
      url: "/donasi/verifikasi",
      items: [
        { title: "Menunggu Verifikasi", url: "/donasi/verifikasi" },
        { title: "List Donasi Masuk", url: "/donasi" },
      ],
    },
    {
      title: "Penyaluran Bantuan",
      icon: <Truck className="size-4" />,
      url: "/penyaluran",
      items: [
        { title: "Input Laporan", url: "/penyaluran/create" },
        { title: "Laporan Distribusi", url: "/penyaluran" },
        { title: "Tracking Dana", url: "/penyaluran/tracking" },
      ],
    },
    {
      title: "Manajemen User",
      url: "#",
      icon: <Users className="size-4" />,
      items: [
        { title: "Data Pengguna", url: "/users" },
        { title: "Riwayat Donasi", url: "/users/riwayat" },
      ],
    },
    {
      title: "Laporan & Transparansi",
      url: "#",
      icon: <PieChart className="size-4" />,
      items: [
        { title: "Rekap Donasi", url: "/laporan/rekap" },
        { title: "Laporan Publik", url: "/laporan/publik" },
        { title: "Export Data", url: "/laporan/export" },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings2 className="size-4" />,
    },
    {
      title: "Help & Support",
      url: "/help",
      icon: <CircleHelp className="size-4" />,
    },
    {
      title: "Search",
      url: "#",
      icon: <Search className="size-4" />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader className="border-b border-border/40 pb-4 pt-4 mb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-transparent cursor-pointer"
            >
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                  <span className="truncate font-semibold text-base tracking-tight text-foreground">
                    Socicare CMS
                  </span>
                  <span className="truncate text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
                    Admin Base
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
  