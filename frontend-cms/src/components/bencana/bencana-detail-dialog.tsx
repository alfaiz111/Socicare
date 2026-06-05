"use client";

import type { Bencana } from "@/types/bencana";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  data: Bencana | null;
};

export default function BencanaDetailDialog({
  open,
  setOpen,
  data,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-100 p-6 rounded-xl space-y-3">

        <h2 className="text-xl font-bold">Detail Bencana</h2>

        <p><b>Nama:</b> {data?.nama}</p>
        <p><b>Lokasi:</b> {data?.lokasi}</p>
        <p><b>Tanggal:</b> {data?.tanggal}</p>
        <p><b>Status:</b> {data?.status}</p>

        <div className="flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 border rounded"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}