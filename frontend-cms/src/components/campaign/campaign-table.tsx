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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Daftar Campaign</h2>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600 text-left">
            <tr>
              <th className="px-6 py-3">Campaign</th>
              <th className="px-6 py-3">Kategori</th>
              <th className="px-6 py-3">Target</th>
              <th className="px-6 py-3">Terkumpul</th>
              <th className="px-6 py-3">Progress</th>
              <th className="px-6 py-3 text-right">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              const progress =
                item.target > 0
                  ? (item.terkumpul / item.target) * 100
                  : 0

              return (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  {/* TITLE + IMAGE */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                      {item.category}
                    </span>
                  </td>

                  {/* TARGET */}
                  <td className="px-6 py-4">
                    Rp {item.target.toLocaleString()}
                  </td>

                  {/* TERKUMPUL */}
                  <td className="px-6 py-4">
                    Rp {item.terkumpul.toLocaleString()}
                  </td>

                  {/* PROGRESS */}
                  <td className="px-6 py-4 w-40">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-[#800000] h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(progress)}%
                    </p>
                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-4 text-right space-x-2">

                    <button
                      onClick={() => onEdit(item)}
                      className="px-3 py-1 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="px-3 py-1 text-xs rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                    >
                      Hapus
                    </button>

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