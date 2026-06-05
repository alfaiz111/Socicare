"use client";

import { useState } from "react";
import {
  PlusCircle,
  Search,
  AlertTriangle,
  MapPin,
} from "lucide-react";

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
];

export default function DisasterTable() {
  const [data] = useState(disasterData);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#800000]">
            Kelola Bencana
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola data bencana yang menjadi dasar campaign donasi.
          </p>
        </div>

        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#800000] text-white px-5 py-3 rounded-xl hover:bg-[#650000] transition">
          <PlusCircle size={18} />
          Tambah Bencana
        </button>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-gray-500 text-sm">
            Total Bencana
          </p>

          <h2 className="text-3xl font-bold mt-2">
            25
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-gray-500 text-sm">
            Bencana Aktif
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-gray-500 text-sm">
            Bencana Selesai
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            17
          </h2>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl border p-4 shadow-sm">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari bencana..."
            className="w-full pl-10 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>
      </div>

  {/* TABLE */}
<div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden">

  <div className="overflow-x-auto">
    <table className="w-full text-sm min-w-[850px]">

      {/* HEADER */}
      <thead>
        <tr className="text-left text-xs text-gray-400 uppercase tracking-wider border-b">
          <th className="px-6 py-4 font-medium">Nama Bencana</th>
          <th className="px-6 py-4 font-medium">Lokasi</th>
          <th className="px-6 py-4 font-medium">Tanggal</th>
          <th className="px-6 py-4 font-medium">Status</th>
          <th className="px-6 py-4 text-right font-medium">Aksi</th>
        </tr>
      </thead>

      {/* BODY */}
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
            className="group border-b last:border-0 hover:bg-gray-50/60 transition"
          >

            {/* NAMA BENCANA */}
            <td className="px-6 py-5">
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle
                    size={20}
                    className="text-red-600"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-gray-800 truncate">
                    {item.nama}
                  </p>
                </div>

              </div>
            </td>

            {/* LOKASI */}
            <td className="px-6 py-5">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin
                  size={16}
                  className="text-gray-400"
                />
                <span className="whitespace-nowrap">
                  {item.lokasi}
                </span>
              </div>
            </td>

            {/* TANGGAL */}
            <td className="px-6 py-5 text-gray-700 whitespace-nowrap">
              {item.tanggal}
            </td>

            {/* STATUS */}
            <td className="px-6 py-5">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  item.status === "Aktif"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.status}
              </span>
            </td>

            {/* ACTION */}
            <td className="px-6 py-5 text-right">
              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition">

                <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600">
                  Detail
                </button>

                <button className="px-3 py-1.5 text-xs rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100">
                  Edit
                </button>

                <button className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
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
  );
}