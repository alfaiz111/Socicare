"use client"

import { motion } from "framer-motion"

/* TYPE */
type Campaign = {
  id: number
  title: string
  target: number
  terkumpul: number
}

type Props = {
  data: Campaign[]
  onEdit: (item: Campaign) => void
  onDelete: (id: number) => void
}

export function CampaignTable({ data, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Judul</th>
            <th className="p-3">Target</th>
            <th className="p-3">Terkumpul</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border-t"
            >
              <td className="p-3">{item.title}</td>
              <td className="p-3 text-center">
                Rp {item.target.toLocaleString("id-ID")}
              </td>
              <td className="p-3 text-center">
                Rp {item.terkumpul.toLocaleString("id-ID")}
              </td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-500"
                >
                  Hapus
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}