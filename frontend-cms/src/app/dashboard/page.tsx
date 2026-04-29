"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
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
      email: `${item.reviewer
        ?.toLowerCase()
        .replace(/\s/g, "")}@gmail.com`,
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
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--header-height": "4rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col gap-6 p-6 bg-red-50 min-h-screen">
          <SectionCards />

          <div className="rounded-2xl bg-white shadow-md p-4">
            <ChartAreaInteractive />
          </div>

          <div className="rounded-2xl bg-white shadow-md p-4">
            <DataTable data={mappedData} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}