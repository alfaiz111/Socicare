"use client";

import * as React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";

export default function Page() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard Admin
        </h1>
        <p className="text-sm text-gray-400">
          Selamat datang kembali! Berikut ringkasan data Anda.
        </p>
      </div>

      {/* CARD STATISTIK */}
      <SectionCards />

      {/* CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* CHART 1 */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Statistik Platform
              </h2>
              <p className="text-xs text-gray-400">
                Distribusi data per kategori
              </p>
            </div>
          </div>

          <ChartAreaInteractive />
        </div>

        {/* CHART 2 */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Tren Pertumbuhan
              </h2>
              <p className="text-xs text-gray-400">
                Performa dalam periode waktu
              </p>
            </div>
          </div>

          <ChartAreaInteractive />
        </div>

      </div>

      {/* SUMMARY BAWAH */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-linear-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm opacity-80">
            Rata-rata Pesanan/User
          </p>
          <h3 className="text-2xl font-bold mt-1">
            2.5
          </h3>
        </div>

        <div className="bg-liniear-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm opacity-80">
            Total Transaksi
          </p>
          <h3 className="text-2xl font-bold mt-1">
            48
          </h3>
        </div>

        <div className="bg-liniear-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm opacity-80">
            Destinasi/Wilayah
          </p>
          <h3 className="text-2xl font-bold mt-1">
            0.5
          </h3>
        </div>

      </div>

    </div>
  );
}