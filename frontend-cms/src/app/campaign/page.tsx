"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { CampaignTable } from "@/components/campaign/campaign-table"
import { CampaignFormModal } from "@/components/campaign/campaign-form-modal"
import { CampaignDeleteDialog } from "@/components/campaign/campaign-delete-dialog"

export type Campaign = {
  id: number
  title: string
  target: number
  terkumpul: number
}

export default function CampaignPage() {
  const [data, setData] = React.useState<Campaign[]>([
    { id: 1, title: "Bantu Banjir", target: 50000000, terkumpul: 20000000 },
    { id: 2, title: "Donasi Pendidikan", target: 30000000, terkumpul: 15000000 },
  ])

  const [openForm, setOpenForm] = React.useState(false)
  const [editData, setEditData] = React.useState<Campaign | null>(null)
  const [deleteId, setDeleteId] = React.useState<number | null>(null)

  function handleSubmit(values: Campaign) {
    if (editData) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editData.id ? { ...values, id: item.id } : item
        )
      )
    } else {
      setData((prev) => [...prev, { ...values, id: Date.now() }])
    }

    setOpenForm(false)
    setEditData(null)
  }

  function handleDelete() {
    setData((prev) => prev.filter((item) => item.id !== deleteId))
    setDeleteId(null)
  }

  return (
    <SidebarProvider> {/* 🔥 WAJIB */}
      <div className="flex min-h-screen w-full">

        <AppSidebar />

        <SidebarInset className="flex-1">
          <main className="p-6 space-y-6 bg-[#f6f3f3] min-h-screen w-full">

            {/* HEADER */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold">Campaign</h1>
                <p className="text-gray-500 text-sm">
                  Kelola campaign donasi
                </p>
              </div>

              <button
                onClick={() => setOpenForm(true)}
                className="bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition"
              >
                + Tambah Campaign
              </button>
            </div>

            {/* TABLE */}
            <CampaignTable
              data={data}
              onEdit={(item: Campaign) => {
                setEditData(item)
                setOpenForm(true)
              }}
              onDelete={(id: number) => setDeleteId(id)}
            />

          </main>
        </SidebarInset>

        {/* MODAL */}
        <CampaignFormModal
          open={openForm}
          onClose={() => {
            setOpenForm(false)
            setEditData(null)
          }}
          onSubmit={handleSubmit}
          initialData={editData}
        />

        <CampaignDeleteDialog
          open={!!deleteId}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />

      </div>
    </SidebarProvider>
  )
}