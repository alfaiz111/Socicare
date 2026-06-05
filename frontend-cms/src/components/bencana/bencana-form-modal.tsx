"use client";

import type { BencanaForm } from "@/types/bencana";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  form: BencanaForm;
  setForm: (v: BencanaForm) => void;
  onSave: () => void;
  isEdit: boolean;
};

export default function BencanaFormModal({
  open,
  setOpen,
  form,
  setForm,
  onSave,
  isEdit,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-125 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">
          {isEdit ? "Edit Bencana" : "Tambah Bencana"}
        </h2>

        <input
          className="w-full border p-2 rounded"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          value={form.lokasi}
          onChange={(e) => setForm({ ...form, lokasi: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
        />

        <select
          className="w-full border p-2 rounded"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value as "Aktif" | "Selesai",
            })
          }
        >
          <option value="Aktif">Aktif</option>
          <option value="Selesai">Selesai</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={() => setOpen(false)}>Batal</button>
          <button
            onClick={onSave}
            className="bg-[#800000] text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
