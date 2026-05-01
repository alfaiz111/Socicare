"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

export function CampaignHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between"
    >
      <div>
        <h1 className="text-2xl font-semibold">Campaign</h1>
        <p className="text-sm text-gray-500">
          Kelola campaign donasi
        </p>
      </div>

      <div className="flex gap-3">
        <Input
          placeholder="Cari campaign..."
          className="w-64"
        />

        <Button className="bg-[#800000] hover:bg-[#660000]">
          <Plus size={16} className="mr-1" />
          Tambah
        </Button>
      </div>
    </motion.div>
  )
}