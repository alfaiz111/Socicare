"use client"

import { useState } from "react"

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

export function VerificationTable() {
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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border">
      <table className="w-full">
        <thead className="bg-[#800000] text-white">
          <tr>
            <th className="text-left p-4">Donatur</th>
            <th className="text-left p-4">Campaign</th>
            <th className="text-left p-4">Nominal</th>
            <th className="text-left p-4">Status</th>
            <th className="text-center p-4">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium">
                {item.nama}
              </td>

              <td className="p-4">
                {item.campaign}
              </td>

              <td className="p-4">
                {item.nominal}
              </td>

              <td className="p-4">
                <span
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium
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
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
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
  )
}