"use client"

import { useState } from "react"

import { AppSidebar } from "@/components/layout/sidebar"
import  AppTopbar  from "@/components/layout/topbar"

const dummyData = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    campaign: "Bantu Korban Banjir",
    nominal: "Rp 100.000",
    status: "Pending",
  },
  {
    id: 2,
    nama: "Siti Aisyah",
    campaign: "Donasi Pendidikan",
    nominal: "Rp 250.000",
    status: "Pending",
  },
]

export default function VerifikasiDonasiPage() {
  const [data, setData] = useState(dummyData)

  const handleApprove = (id: number) => {
    const updated = data.map((item) =>
      item.id === id
        ? { ...item, status: "Disetujui" }
        : item
    )

    setData(updated)
  }

  const handleReject = (id: number) => {
    const updated = data.map((item) =>
      item.id === id
        ? { ...item, status: "Ditolak" }
        : item
    )

    setData(updated)
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f7]">
      
      {/* SIDEBAR */}
      <AppSidebar />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <AppTopbar />

        {/* PAGE */}
        <main className="p-6 space-y-6">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold text-[#800000]">
              Verifikasi Donasi
            </h1>

            <p className="text-gray-500 mt-1">
              Kelola dan verifikasi pembayaran donasi donatur.
            </p>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full">
              
              <thead className="bg-[#800000] text-white">
                <tr>
                  <th className="text-left p-4 font-medium">
                    Donatur
                  </th>

                  <th className="text-left p-4 font-medium">
                    Campaign
                  </th>

                  <th className="text-left p-4 font-medium">
                    Nominal
                  </th>

                  <th className="text-left p-4 font-medium">
                    Status
                  </th>

                  <th className="text-center p-4 font-medium">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-gray-700">
                      {item.nama}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.campaign}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.nominal}
                    </td>

                    <td className="p-4">
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            item.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : item.status === "Disetujui"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(item.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
                        >
                          Reject
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </main>
      </div>
    </div>
  )
}