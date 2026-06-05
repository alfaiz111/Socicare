"use client"

import { useState } from "react"
import {
  PlusCircle,
  Search,
  AlertTriangle,
  MapPin,
} from "lucide-react"

const disasterData = [
  {
    id: 1,
    nama: "Banjir Bandar Lampung",
    lokasi: "Bandar Lampung",
    tanggal: "15 Mei 2026",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Gempa Sumatera Barat",
    lokasi: "Padang",
    tanggal: "10 Mei 2026",
    status: "Selesai",
  },
]

export default function DisasterTable() {
  const [data] = useState(disasterData)

  return (
    <div className="w-full space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold text-[#800000]">
            Kelola Bencana
          </h1>

          <p className="text-gray-500 mt-2">
            Kelola data bencana yang menjadi dasar campaign donasi.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#650000] text-white px-5 py-3 rounded-xl transition">
          <PlusCircle size={18} />
          Tambah Bencana
        </button>

      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Total Bencana
          </p>

          <h2 className="text-4xl font-bold mt-2">
            25
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Bencana Aktif
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Bencana Selesai
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            17
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl border shadow-sm p-5">

        <div className="relative w-full">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari bencana..."
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
          />

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b text-xs uppercase tracking-wider text-gray-400">

                <th className="px-6 py-4 text-left">
                  Nama Bencana
                </th>

                <th className="px-6 py-4 text-left">
                  Lokasi
                </th>

                <th className="px-6 py-4 text-left">
                  Tanggal
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Aksi
                </th>

              </tr>
            </thead>

            <tbody>

              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-16 text-center text-gray-400"
                  >
                    Tidak ada data bencana
                  </td>
                </tr>
              )}

              {data.map((item) => (
                <tr
                  key={item.id}
                  className="group border-b last:border-0 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle
                          size={20}
                          className="text-red-600"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {item.nama}
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-gray-600">

                      <MapPin
                        size={16}
                        className="text-gray-400"
                      />

                      {item.lokasi}

                    </div>

                  </td>

                  <td className="px-6 py-5 whitespace-nowrap text-gray-600">
                    {item.tanggal}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Aktif"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <div className="flex justify-end gap-2">

                      <button className="px-3 py-2 text-xs rounded-lg border hover:bg-gray-100">
                        Detail
                      </button>

                      <button className="px-3 py-2 text-xs rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                        Edit
                      </button>

                      <button className="px-3 py-2 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
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

    </div>
  )
}