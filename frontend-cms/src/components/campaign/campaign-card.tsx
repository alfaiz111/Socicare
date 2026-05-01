"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Campaign = {
  title: string
  target: number
  terkumpul: number
}

export function CampaignCard({
  data,
  delay,
}: {
  data: Campaign
  delay: number
}) {
  const progress = (data.terkumpul / data.target) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="
        p-5 rounded-2xl
        bg-linear-to-b from-[#fffafa] to-[#fdf2f2]
        border border-[#f1dede]
        shadow-sm hover:shadow-lg
        transition-all duration-300
      "
    >
      {/* TITLE */}
      <h2 className="font-semibold text-gray-800">
        {data.title}
      </h2>

      {/* PROGRESS */}
      <div className="mt-4">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, delay }}
            className="h-full bg-[#800000]"
          />
        </div>

        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>
            Rp {data.terkumpul.toLocaleString("id-ID")}
          </span>
          <span>{progress.toFixed(0)}%</span>
        </div>
      </div>

      {/* TARGET */}
      <p className="text-xs text-gray-400 mt-2">
        Target: Rp {data.target.toLocaleString("id-ID")}
      </p>

      {/* ACTION */}
      <div className="flex items-center justify-end mt-4 text-[#800000] text-sm">
        Detail
        <ArrowUpRight size={16} />
      </div>
    </motion.div>
  )
}