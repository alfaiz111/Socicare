"use client";

import { useState } from "react";

import { AppSidebar } from "@/components/layout/sidebar";
import AppTopbar from "@/components/layout/topbar";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

import {
  Search,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

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
];

export default function VerifikasiDonasiPage() {
  const [data, setData] = useState(dummyData);

  const handleApprove = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Disetujui" }
          : item
      )
    );
  };

  const handleReject = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Ditolak" }
          : item
      )
    );
  };

  const totalPending = data.filter(
    (item) => item.status === "Pending"
  ).length;

  const totalApproved = data.filter(
    (item) => item.status === "Disetujui"
  ).length;

  const totalRejected = data.filter(
    (item) => item.status === "Ditolak"
  ).length;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <AppTopbar />

          <main className="p-6 space-y-6">

            {/* HEADER */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Verifikasi Donasi
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Kelola dan verifikasi pembayaran donasi donatur.
              </p>
            </div>

            {/* STATISTIK */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl border shadow-sm p-5">
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-500" size={24} />

                  <div>
                    <p className="text-sm text-gray-500">
                      Pending
                    </p>

                    <h2 className="text-3xl font-bold">
                      {totalPending}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border shadow-sm p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="text-green-500"
                    size={24}
                  />

                  <div>
                    <p className="text-sm text-gray-500">
                      Disetujui
                    </p>

                    <h2 className="text-3xl font-bold text-green-600">
                      {totalApproved}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border shadow-sm p-5">
                <div className="flex items-center gap-3">
                  <XCircle
                    className="text-red-500"
                    size={24}
                  />

                  <div>
                    <p className="text-sm text-gray-500">
                      Ditolak
                    </p>

                    <h2 className="text-3xl font-bold text-red-600">
                      {totalRejected}
                    </h2>
                  </div>
                </div>
              </div>

            </div>

            {/* SEARCH */}
            <div className="bg-white rounded-2xl border shadow-sm p-5">

              <div className="relative max-w-md">

                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Cari donatur..."
                  className="w-full pl-10 pr-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
                />

              </div>

            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

              <div className="p-5 border-b">
                <h2 className="font-semibold text-gray-800">
                  Daftar Verifikasi Donasi
                </h2>

                <p className="text-sm text-gray-500">
                  Total {data.length} transaksi
                </p>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead>
                    <tr className="border-b text-xs uppercase tracking-wider text-gray-500">

                      <th className="px-6 py-4 text-left">
                        Donatur
                      </th>

                      <th className="px-6 py-4 text-left">
                        Campaign
                      </th>

                      <th className="px-6 py-4 text-left">
                        Nominal
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

                    {data.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50 transition"
                      >

                        <td className="px-6 py-5 font-medium text-gray-800">
                          {item.nama}
                        </td>

                        <td className="px-6 py-5 text-gray-600">
                          {item.campaign}
                        </td>

                        <td className="px-6 py-5 text-gray-600">
                          {item.nominal}
                        </td>

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
                          <div className="flex justify-end gap-2">

                            <button
                              onClick={() => handleApprove(item.id)}
                              className="px-3 py-1.5 text-xs rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() => handleReject(item.id)}
                              className="px-3 py-1.5 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
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

            </div>

          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}