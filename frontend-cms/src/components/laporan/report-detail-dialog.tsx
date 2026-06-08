"use client";

import { Report } from "../../types/report-types";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Report | null;
}

export default function ReportDetailDialog({ open, setOpen, data }: Props) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-[#800000]">Detail Laporan</h2>

        <div className="mt-6 space-y-4">
          <p>
            <strong>Periode:</strong> {data.periode}
          </p>
          <p>
            <strong>Total Donasi:</strong> {data.totalDonasi}
          </p>
          <p>
            <strong>Total Penyaluran:</strong> {data.totalPenyaluran}
          </p>
          <p>
            <strong>Jumlah Donatur:</strong> {data.donatur}
          </p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full bg-[#800000] text-white py-3 rounded-xl"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
