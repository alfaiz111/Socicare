"use client";

import * as React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import rawData from "./data.json";

// ✅ type dari data.json
type RawItem = {
  id?: number;
  header?: string;
  reviewer?: string;
  target?: number | string;
  type?: string;
  status?: string;
};

// ✅ type yang dibutuhkan DataTable
type Status = "Sukses" | "Pending" | "Gagal";

type Donasi = {
  id: number;
  nama: string;
  email: string;
  jumlah: number;
  metode: string;
  status: Status;
  tanggal: string;
};

export default function Page() {
  const mappedData = React.useMemo<Donasi[]>(() => {
    return (rawData as RawItem[]).map((item, index) => {
      let status: Status;

      if (item.status === "Done") {
        status = "Sukses";
      } else if (item.status === "In Process") {
        status = "Pending";
      } else {
        status = "Gagal";
      }

      return {
        id: item.id ?? index + 1,
        nama: item.header || "Anonim",
        email: `${item.reviewer?.toLowerCase().replace(/\s/g, "")}@gmail.com`,
        jumlah: Number(item.target) * 100000 || 500000,
        metode: item.type || "Transfer Bank",
        status,
        tanggal: "29 Apr 2026",
      };
    });
  }, []);

  return (
    <div className="space-y-6">
      <SectionCards />

      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
        <ChartAreaInteractive />
      </div>

      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
        <DataTable data={mappedData} />
      </div>
    </div>
  );
}