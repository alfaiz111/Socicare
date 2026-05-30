"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar"
import TopBar from "@/components/layout/topbar"
import DistributionTable from "@/components/penyaluran/distribution-table"

export default function PenyaluranPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f5f5f7]">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <TopBar />

          <main className="p-6">
            <DistributionTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}