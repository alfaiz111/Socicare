"use client";

import { useState } from "react";
import { Search, CheckCircle, XCircle, Clock } from "lucide-react";

type DonationStatus = "Pending" | "Disetujui" | "Ditolak";

interface Donation {
  id: number;
  nama: string;
  campaign: string;
  nominal: string;
  tanggal: string;
  status: DonationStatus;
}

const initialData: Donation[] = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    campaign: "Bantu Korban Banjir",
    nominal: "Rp 100.000",
    tanggal: "05 Juni 2026",
    status: "Pending",
  },
  {
    id: 2,
    nama: "Siti Aisyah",
    campaign: "Donasi Pendidikan",
    nominal: "Rp 250.000",
    tanggal: "04 Juni 2026",
    status: "Pending",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    campaign: "Gempa Cianjur",
    nominal: "Rp 500.000",
    tanggal: "03 Juni 2026",
    status: "Disetujui",
  },
];

export default function VerifikasiDonasiPage() {
  const [data, setData] = useState<Donation[]>(initialData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");

  const handleApprove = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Disetujui" } : item,
      ),
    );
  };

  const handleReject = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Ditolak" } : item,
      ),
    );
  };

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.campaign.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "Semua" || item.status === filter;

    return matchSearch && matchFilter;
  });

  const totalPending = data.filter((item) => item.status === "Pending").length;

  const totalApproved = data.filter(
    (item) => item.status === "Disetujui",
  ).length;

  const totalRejected = data.filter((item) => item.status === "Ditolak").length;

  return (
    <main className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#800000]">
            Verifikasi Donasi
          </h1>

          <p className="text-gray-500 mt-2">
            Kelola dan verifikasi pembayaran donasi dari para donatur.
          </p>
        </div>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-linear-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <Clock className="text-yellow-500" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold">{totalPending}</h2>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <CheckCircle className="text-green-500" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Disetujui</p>

              <h2 className="text-3xl font-bold text-green-600">
                {totalApproved}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl">
              <XCircle className="text-red-500" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Ditolak</p>

              <h2 className="text-3xl font-bold text-red-600">
                {totalRejected}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="bg-white rounded-2xl border shadow-sm p-5">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Cari donatur atau campaign..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-xl px-4 py-2.5 outline-none"
          >
            <option value="Semua">Semua Status</option>
            <option value="Pending">Pending</option>
            <option value="Disetujui">Disetujui</option>
            <option value="Ditolak">Ditolak</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-semibold text-gray-800">
            Daftar Verifikasi Donasi
          </h2>

          <p className="text-sm text-gray-500">
            Total {filteredData.length} transaksi
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
                  <th className="px-6 py-4 text-left">Donatur</th>
                  <th className="px-6 py-4 text-left">Campaign</th>
                  <th className="px-6 py-4 text-left">Nominal</th>
                  <th className="px-6 py-4 text-left">Tanggal</th>
                  <th className="px-6 py-4 text-left">Bukti</th>
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
                    <td className="px-6 py-5 font-medium">{item.nama}</td>

                    <td className="px-6 py-5">{item.campaign}</td>

                    <td className="px-6 py-5 font-semibold text-[#800000]">
                      {item.nominal}
                    </td>

                    <td className="px-6 py-5">{item.tanggal}</td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.status === "Disetujui"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      {item.status === "Pending" ? (
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleApprove(item.id)}
                            className="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() => handleReject(item.id)}
                            className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <div className="text-right text-xs text-gray-400">
                          Sudah Diproses
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
