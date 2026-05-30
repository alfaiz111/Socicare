"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

const initialData = [
  {
    id: 1,
    campaign: "Bantu Korban Banjir",
    penerima: "Posko Banjir Lampung",
    nominal: "Rp 5.000.000",
    tanggal: "20 Mei 2026",
    status: "Disalurkan",
  },
  {
    id: 2,
    campaign: "Donasi Pendidikan",
    penerima: "Yayasan Pendidikan Indonesia",
    nominal: "Rp 2.500.000",
    tanggal: "25 Mei 2026",
    status: "Pending",
  },
]

export default function DistributionTable() {
  const [data] = useState(initialData)

  return (
    <div className="space-y-6">

      {/* ACTION BAR */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Cari penyaluran..."
          className="w-80 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
        />

        <button className="flex items-center gap-2 bg-[#800000] hover:bg-[#6a0000] text-white px-4 py-2 rounded-xl">
          <PlusCircle size={18} />
          Tambah Penyaluran
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#800000] text-white">
            <tr>
              <th className="p-5 text-left">Campaign</th>
              <th className="p-5 text-left">Penerima</th>
              <th className="p-5 text-left">Nominal</th>
              <th className="p-5 text-left">Tanggal</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-5 font-medium">
                  {item.campaign}
                </td>

                <td className="p-5">
                  {item.penerima}
                </td>

                <td className="p-5">
                  {item.nominal}
                </td>

                <td className="p-5">
                  {item.tanggal}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Disalurkan"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex justify-center gap-2">
                    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                      Detail
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}