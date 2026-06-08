"use client";

import { Report } from "../../types/report-types";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Report | null;
}

export default function ReportDownloadDialog({ open, setOpen, data }: Props) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-green-600">
          Download Laporan
        </h2>

        <p className="text-gray-600 mt-3">
          Download laporan periode{" "}
          <span className="font-semibold">{data.periode}</span>
        </p>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-green-600 text-white py-3 rounded-xl">
            Excel
          </button>

          <button className="flex-1 bg-red-600 text-white py-3 rounded-xl">
            PDF
          </button>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="w-full border mt-3 py-3 rounded-xl"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
