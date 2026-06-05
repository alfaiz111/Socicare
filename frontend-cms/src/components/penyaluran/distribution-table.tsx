"use client";

import { useState } from "react";
import {
  PlusCircle,
  Search,
  CheckCircle,
  Clock,
  HandCoins,
} from "lucide-react";

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
];

export default function DistributionTable() {
  const [data] = useState(initialData);
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.campaign.toLowerCase().includes(search.toLowerCase()) ||
      item.penerima.toLowerCase().includes(search.toLowerCase()),
  );

  const totalData = data.length;

  const totalDistributed = data.filter(
    (item) => item.status === "Disalurkan",
  ).length;

  const totalPending = data.filter((item) => item.status === "Pending").length;

  return (
    <div className="space-y-6">
      {/* STATISTIK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <HandCoins className="text-blue-600" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Total Penyaluran</p>

              <h2 className="text-3xl font-bold">{totalData}</h2>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <CheckCircle className="text-green-500" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Disalurkan</p>

              <h2 className="text-3xl font-bold text-green-600">
                {totalDistributed}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <Clock className="text-yellow-500" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Pending</p>

              <h2 className="text-3xl font-bold text-yellow-600">
                {totalPending}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="bg-white rounded-2xl border shadow-sm p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Cari campaign atau penerima..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#6b0000] text-white px-5 py-2.5 rounded-xl transition">
            <PlusCircle size={18} />
            Tambah Penyaluran
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-semibold text-gray-800">
            Daftar Penyaluran Donasi
          </h2>

          <p className="text-sm text-gray-500">
            Total {filteredData.length} data
          </p>
        </div>

        {filteredData.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-gray-500">Tidak ada data ditemukan</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 text-left">Campaign</th>

                  <th className="px-6 py-4 text-left">Penerima</th>

                  <th className="px-6 py-4 text-left">Nominal</th>

                  <th className="px-6 py-4 text-left">Tanggal</th>

                  <th className="px-6 py-4 text-left">Status</th>

                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-5 font-medium">{item.campaign}</td>

                    <td className="px-6 py-5">{item.penerima}</td>

                    <td className="px-6 py-5 font-semibold text-[#800000]">
                      {item.nominal}
                    </td>

                    <td className="px-6 py-5">{item.tanggal}</td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Disalurkan"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                          Detail
                        </button>

                        <button className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
