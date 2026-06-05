"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar"
import TopBar from "@/components/layout/topbar"
import DisasterTable from "@/components/bencana/disaster-table"

export default function BencanaPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f5f5f7]">

        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0">

          <TopBar />

          <main className="flex-1 w-full p-6">
            <DisasterTable />
          </main>

        </div>

      </div>
    </SidebarProvider>
  )
}