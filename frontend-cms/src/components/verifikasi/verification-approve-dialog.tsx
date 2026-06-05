"use client";

import { Donation } from "../../types/verification-types";

interface Props {
  open: boolean;
  data: Donation | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function VerificationApproveDialog({
  open,
  data,
  onClose,
  onConfirm,
}: Props) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-green-600">Approve Donasi</h2>

        <p className="text-sm text-gray-600">
          Setujui donasi dari <b>{data.nama}</b>?
        </p>

        <div className="flex gap-2">
          <button onClick={onClose} className="flex-1 border py-2 rounded-xl">
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-green-600 text-white py-2 rounded-xl"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
