"use client"

import * as React from "react"
import { Campaign } from "@/types/campaign"

type Props = {
  data: Campaign[]
  onEdit: (item: Campaign) => void
  onDelete: (id: number) => void
}

export function CampaignTable({ data, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          {/* HEADER */}
          <thead>
            <tr className="text-left text-xs text-gray-400 uppercase tracking-wider border-b">
              <th className="px-6 py-4 font-medium">Campaign</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Target</th>
              <th className="px-6 py-4 font-medium">Collected</th>
              <th className="px-6 py-4 font-medium">Progress</th>
              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={6} className="py-16 text-center text-gray-400">
                  Tidak ada campaign
                </td>
              </tr>
            )}

            {data.map((item) => {
              const progress =
                item.target > 0
                  ? (item.terkumpul / item.target) * 100
                  : 0

              return (
                <tr
                  key={item.id}
                  className="group border-b last:border-0 hover:bg-gray-50/60 transition"
                >

                  {/* CAMPAIGN */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-xl object-cover shadow-sm"
                      />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                      {item.category}
                    </span>
                  </td>

                  {/* TARGET */}
                  <td className="px-6 py-5 text-gray-700 font-medium">
                    Rp {item.target.toLocaleString()}
                  </td>

                  {/* COLLECTED */}
                  <td className="px-6 py-5 text-gray-700 font-medium">
                    Rp {item.terkumpul.toLocaleString()}
                  </td>

                  {/* PROGRESS */}
                  <td className="px-6 py-5 w-48">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#800000] to-[#b91c1c] rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-10 text-right">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition">

                      <button
                        onClick={() => onEdit(item)}
                        className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(item.id)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}