"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import ReportTable from "@/components/laporan/report-table";

export default function LaporanPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f5f5f7]">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6 space-y-6">
            <ReportTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
