"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    group: "DONASI",
    items: [
      { title: "Campaign", href: "/campaign", icon: Megaphone },
      {
        title: "Verifikasi Donasi",
        href: "/donasi/verifikasi",
        icon: ShieldCheck,
      },
      { title: "Penyaluran", href: "/penyaluran", icon: Truck },
    ],
  },
  {
    group: "USER",
    items: [
      { title: "Donatur", href: "/donatur", icon: Users },
    ],
  },
  {
    group: "REPORT",
    items: [
      { title: "Laporan", href: "/laporan", icon: PieChart },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="w-64 border-none">
      <div className="h-full flex flex-col bg-[#2a0b0f] text-white border-r border-white/5">

        {/* HEADER */}
        <SidebarHeader className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/SOSMAS.png"
              alt="Socicare Logo"
              width={42}
              height={42}
              className="object-contain"
            />

            <div>
              <h1 className="text-sm font-semibold">Socicare</h1>
              <p className="text-xs text-white/50">CMS Donasi</p>
            </div>
          </div>
        </SidebarHeader>

        {/* MENU */}
        <SidebarContent className="flex-1 px-3 py-5 space-y-6 overflow-y-auto">
          {menu.map((section) => (
            <div key={section.group} className="space-y-2">
              <p className="text-[10px] tracking-widest text-white/40 px-2">
                {section.group}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                        transition-all duration-200
                        ${
                          active
                            ? "bg-white text-[#800000] font-medium shadow"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <Icon
                        size={17}
                        className={active ? "text-[#800000]" : ""}
                      />

                      {item.title}

                      {active && (
                        <span className="ml-auto w-1 h-4 bg-[#800000] rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              A
            </div>

            <div className="leading-tight">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-white/50">
                admin@socicare.id
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 text-xs py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
              <Settings size={14} />
              Settings
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 text-xs py-2 rounded-lg bg-red-500/80 hover:bg-red-600 transition">
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}