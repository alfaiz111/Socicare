"use client";

import { Donatur } from "../../types/donatur-types";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Donatur | null;
  onConfirm: () => void;
}

export default function DonaturDeleteDialog({
  open,
  setOpen,
  data,
  onConfirm,
}: Props) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold text-red-600">Hapus Donatur</h2>

        <p className="mt-3 text-gray-600">
          Apakah Anda yakin ingin menghapus donatur
          <span className="font-semibold"> {data.nama}</span>?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 border rounded-xl"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
