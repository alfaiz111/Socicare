"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import rawData from "./data.json"

export default function Page() {
  const mappedData = React.useMemo(() => {
    return rawData.map((item, index) => ({
      id: item.id ?? index + 1,
      nama: item.header || "Anonim",
      email: `${item.reviewer?.toLowerCase().replace(/\s/g, "")}@gmail.com`,
      jumlah: Number(item.target) * 100000 || 500000,
      metode: item.type || "Transfer Bank",
      status:
        item.status === "Done"
          ? "Sukses"
          : item.status === "In Process"
          ? "Pending"
          : "Gagal",
      tanggal: "29 Apr 2026",
    }))
  }, [])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#120306] text-white">

        <AppSidebar />

        <SidebarInset className="flex-1 flex flex-col bg-transparent">

          <div className="flex-1 p-6 space-y-6">

            {/* CARDS */}
            <SectionCards />

            {/* CHART GLASS */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5 hover:scale-[1.01] transition">
              <ChartAreaInteractive />
            </div>

            {/* TABLE GLASS */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
              <DataTable data={mappedData} />
            </div>

          </div>

        </SidebarInset>

      </div>
    </SidebarProvider>
  )
}