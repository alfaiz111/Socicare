"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Truck,
  Users,
  PieChart,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    group: "MAIN",
    items: [
      { title: "Dashboard", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    group: "MANAGEMENT",
    items: [
      { title: "Campaign", href: "/campaign", icon: Megaphone },
      { title: "Verifikasi Donasi", href: "/donasi/verifikasi", icon: ShieldCheck },
      { title: "Penyaluran", href: "/penyaluran", icon: Truck },
    ],
  },
  {
    group: "USER",
    items: [{ title: "Pengguna", href: "/users", icon: Users }],
  },
  {
    group: "REPORT",
    items: [{ title: "Laporan", href: "/laporan", icon: PieChart }],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="w-64 border-none bg-transparent">
      
      {/* WRAPPER UTAMA (INI YANG NGILANGIN PUTIH) */}
      <div className="h-full flex flex-col bg-linear-to-b from-[#800000] via-[#6b0f1a] to-[#4a0000] text-white shadow-2xl">
        
        {/* HEADER */}
        <SidebarHeader className="p-5 border-b border-white/10 bg-transparent">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-2">
              <span className="font-bold text-lg">S</span>
            </div>
            <h1 className="text-lg font-bold">Socicare</h1>
            <p className="text-xs opacity-70">Admin Dashboard</p>
          </div>
        </SidebarHeader>

        {/* CONTENT */}
        <SidebarContent className="px-3 py-4 bg-transparent overflow-y-auto">
          {menu.map((section) => (
            <div key={section.group} className="mb-5">
              
              <p className="text-[10px] uppercase text-white/50 px-2 mb-2">
                {section.group}
              </p>

              <div className="flex flex-col gap-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                        active
                          ? "bg-white text-[#800000] shadow-lg"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          active ? "text-[#800000]" : "text-white/80"
                        }
                      />
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      {active && (
                        <div className="ml-auto w-1.5 h-5 bg-[#800000] rounded-full"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter className="p-4 border-t border-white/10 bg-transparent">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs opacity-60">admin@socicare.id</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs">
              <Settings size={14} /> Settings
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-xs">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </SidebarFooter>

      </div>
    </Sidebar>
  );
}