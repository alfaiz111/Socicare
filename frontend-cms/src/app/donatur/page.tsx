"use client"

import { AppSidebar } from "@/components/layout/sidebar"
import TopBar from "@/components/layout/topbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import DonaturTable from "@/components/donatur/donatur-table"

export default function DonaturPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f5f5f7]">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <TopBar />

          <main className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#800000]">
                Donatur
              </h1>

              <p className="text-gray-500 mt-1">
                Kelola data donatur yang terdaftar pada platform.
              </p>
            </div>

            <DonaturTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}