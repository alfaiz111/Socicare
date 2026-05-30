"use client"

import { useState } from "react"
import { Search, Users } from "lucide-react"

const initialData = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    email: "ahmad@gmail.com",
    totalDonasi: "Rp 1.500.000",
    jumlahDonasi: 8,
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Siti Aisyah",
    email: "siti@gmail.com",
    totalDonasi: "Rp 850.000",
    jumlahDonasi: 4,
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    email: "budi@gmail.com",
    totalDonasi: "Rp 250.000",
    jumlahDonasi: 1,
    status: "Tidak Aktif",
  },
]

export default function DonaturTable() {
  const [data] = useState(initialData)

  return (
    <div className="space-y-6">

      {/* STATISTIC */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <p className="text-sm text-gray-500">Total Donatur</p>
          <h2 className="text-3xl font-bold text-[#800000] mt-2">
            152
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <p className="text-sm text-gray-500">Donatur Aktif</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            124
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <p className="text-sm text-gray-500">Total Dana</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            Rp 50 Jt
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border flex justify-between items-center">
        <div className="relative w-80">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari donatur..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">

          <thead className="bg-[#800000] text-white">
            <tr>
              <th className="text-left p-4">Nama</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Jumlah Donasi</th>
              <th className="text-left p-4">Total Donasi</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center">
                      <Users size={18} />
                    </div>

                    <span className="font-medium">
                      {item.nama}
                    </span>
                  </div>
                </td>

                <td className="p-4">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.jumlahDonasi}
                </td>

                <td className="p-4 font-medium">
                  {item.totalDonasi}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                      Detail
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
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