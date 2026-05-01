"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Campaign } from "@/types/campaign"

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (data: Campaign) => void
  initialData: Campaign | null
}

export function CampaignFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: Props) {

  const [form, setForm] = React.useState(() => ({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    category: initialData?.category ?? "",
    target: initialData?.target?.toString() ?? "",
    terkumpul: initialData?.terkumpul?.toString() ?? "",
    deadline: initialData?.deadline ?? "",
    image: initialData?.image ?? "",
  }))

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

      <motion.div
        key={initialData?.id ?? "new"}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-2xl w-105 shadow-xl"
      >

        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Campaign" : "Tambah Campaign"}
        </h2>

        <div className="space-y-3">

          <input
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            placeholder="Judul"
            className="w-full border p-2 rounded-lg"
          />

          <input
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Deskripsi"
            className="w-full border p-2 rounded-lg"
          />

          <input
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            placeholder="Kategori"
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="date"
            value={form.deadline}
            onChange={(e) =>
              setForm({ ...form, deadline: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
          />

          <input
            value={form.target}
            onChange={(e) =>
              setForm({ ...form, target: e.target.value })
            }
            placeholder="Target"
            className="w-full border p-2 rounded-lg"
          />

          <input
            value={form.terkumpul}
            onChange={(e) =>
              setForm({ ...form, terkumpul: e.target.value })
            }
            placeholder="Terkumpul"
            className="w-full border p-2 rounded-lg"
          />

          <input
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
            placeholder="Image URL"
            className="w-full border p-2 rounded-lg"
          />

        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose}>Batal</button>

          <button
            onClick={() =>
              onSubmit({
                id: initialData?.id ?? 0,
                title: form.title,
                description: form.description,
                category: form.category,
                target: Number(form.target),
                terkumpul: Number(form.terkumpul),
                deadline: form.deadline,
                image: form.image,
              })
            }
            className="bg-[#800000] text-white px-3 py-1 rounded"
          >
            Simpan
          </button>
        </div>

      </motion.div>
    </div>
  )
}