"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { CampaignTable } from "@/components/campaign/campaign-table"
import { CampaignFormModal } from "@/components/campaign/campaign-form-modal"
import { CampaignDeleteDialog } from "@/components/campaign/campaign-delete-dialog"
import { Campaign } from "@/types/campaign"

export default function CampaignPage() {
  const [data, setData] = React.useState<Campaign[]>([
    {
      id: 1,
      title: "Bantu Banjir",
      description: "Donasi untuk korban banjir",
      category: "Sosial",
      target: 50000000,
      terkumpul: 20000000,
      deadline: "2026-06-01",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    },
    {
      id: 2,
      title: "Donasi Pendidikan",
      description: "Bantu pendidikan anak",
      category: "Pendidikan",
      target: 30000000,
      terkumpul: 15000000,
      deadline: "2026-07-01",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
  ])

  const [openForm, setOpenForm] = React.useState(false)
  const [editData, setEditData] = React.useState<Campaign | null>(null)
  const [deleteId, setDeleteId] = React.useState<number | null>(null)

  const handleSubmit = (values: Campaign) => {
    if (editData) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editData.id ? { ...values, id: item.id } : item
        )
      )
    } else {
      setData((prev) => [
        ...prev,
        { ...values, id: Date.now() },
      ])
    }

    setOpenForm(false)
    setEditData(null)
  }

  const handleDelete = () => {
    if (deleteId === null) return
    setData((prev) => prev.filter((item) => item.id !== deleteId))
    setDeleteId(null)
  }

  return (
    <SidebarProvider>
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
                onClick={() => {
                  setEditData(null)
                  setOpenForm(true)
                }}
                className="bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition"
              >
                + Tambah Campaign
              </button>
            </div>

            {/* TABLE */}
            <CampaignTable
              data={data}
              onEdit={(item) => {
                setEditData(item)
                setOpenForm(true)
              }}
              onDelete={(id) => setDeleteId(id)}
            />

          </main>
        </SidebarInset>

        {/* FORM MODAL */}
        <CampaignFormModal
          open={openForm}
          onClose={() => {
            setOpenForm(false)
            setEditData(null)
          }}
          onSubmit={handleSubmit}
          initialData={editData}
        />

        {/* DELETE MODAL */}
        <CampaignDeleteDialog
          open={deleteId !== null}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      </div>
      </SidebarProvider>
  )
}