"use client"

import {
  FileSpreadsheet,
  FileText,
  Wallet,
  Users,
  Megaphone,
  Truck,
} from "lucide-react"

const reports = [
  {
    id: 1,
    periode: "Mei 2026",
    totalDonasi: "Rp 15.500.000",
    totalPenyaluran: "Rp 12.000.000",
    donatur: 124,
  },
  {
    id: 2,
    periode: "April 2026",
    totalDonasi: "Rp 12.800.000",
    totalPenyaluran: "Rp 10.500.000",
    donatur: 98,
  },
]

export default function ReportTable() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Laporan Donasi
        </h1>

        <p className="text-gray-500 mt-1">
          Ringkasan data donasi, campaign, donatur dan penyaluran.
        </p>
      </div>

      {/* SUMMARY CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Total Donasi
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Rp 125 Jt
              </h2>
            </div>

            <Wallet className="text-green-600" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Total Donatur
              </p>

              <h2 className="text-2xl font-bold mt-2">
                245
              </h2>
            </div>

            <Users className="text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Campaign Aktif
              </p>

              <h2 className="text-2xl font-bold mt-2">
                12
              </h2>
            </div>

            <Megaphone className="text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Penyaluran
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Rp 95 Jt
              </h2>
            </div>

            <Truck className="text-purple-600" />
          </div>
        </div>

      </div>

      {/* ACTION */}
      <div className="flex justify-end gap-3">

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">
          <FileSpreadsheet size={18} />
          Export Excel
        </button>

        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700">
          <FileText size={18} />
          Export PDF
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#800000] text-white">
            <tr>
              <th className="p-4 text-left">
                Periode
              </th>

              <th className="p-4 text-left">
                Total Donasi
              </th>

              <th className="p-4 text-left">
                Total Penyaluran
              </th>

              <th className="p-4 text-left">
                Jumlah Donatur
              </th>

              <th className="p-4 text-center">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {report.periode}
                </td>

                <td className="p-4">
                  {report.totalDonasi}
                </td>

                <td className="p-4">
                  {report.totalPenyaluran}
                </td>

                <td className="p-4">
                  {report.donatur}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Detail
                    </button>

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                      Download
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