"use client";

import * as React from "react";
import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#120306] text-white">

        {/* SIDEBAR */}
        <AppSidebar />

        {/* CONTENT */}
        <SidebarInset className="flex-1 flex flex-col">

          {/* TOPBAR */}
          <TopBar />

          {/* MAIN CONTENT */}
          <div className="flex-1 p-6">
            {children}
          </div>

        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}