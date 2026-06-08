"use client";

import { Donatur } from "../../types/donatur-types";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Donatur | null;
}

export default function DonaturDetailDialog({ open, setOpen, data }: Props) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
        <h2 className="text-xl font-semibold text-[#800000]">Detail Donatur</h2>

        <div className="space-y-4 mt-6">
          <div>
            <p className="text-sm text-gray-500">Nama</p>
            <p className="font-medium">{data.nama}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>{data.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Jumlah Donasi</p>
            <p>{data.jumlahDonasi}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total Donasi</p>
            <p>{data.totalDonasi}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p>{data.status}</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full bg-[#800000] text-white py-3 rounded-xl hover:bg-[#650000]"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
