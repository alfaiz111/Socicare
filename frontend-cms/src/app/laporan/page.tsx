"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar"
import TopBar from "@/components/layout/topbar"
import ReportTable from "@/components/laporan/report-table"

export default function LaporanPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f5f5f7]">

        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <TopBar />

          <main className="p-6">
            <ReportTable />
          </main>
        </div>

      </div>
    </SidebarProvider>
  )
}