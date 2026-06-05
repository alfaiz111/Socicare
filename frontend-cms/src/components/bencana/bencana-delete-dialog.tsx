"use client";

import type { Bencana } from "@/types/bencana";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  onConfirm: () => void;
  data: Bencana | null;
};

export default function BencanaDeleteDialog({
  open,
  setOpen,
  onConfirm,
  data,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-100 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-bold text-red-600">Hapus Bencana</h2>

        <p>
          Yakin ingin menghapus <b>{data?.nama}</b>?
        </p>

        <div className="flex justify-end gap-2">
          <button onClick={() => setOpen(false)}>Batal</button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
