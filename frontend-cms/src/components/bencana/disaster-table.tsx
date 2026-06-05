"use client";

import { useState } from "react";
import { PlusCircle, Search, AlertTriangle, MapPin } from "lucide-react";

import type { Bencana, BencanaForm } from "@/types/bencana";

import BencanaFormModal from "./bencana-form-modal";
import BencanaDeleteDialog from "./bencana-delete-dialog";
import BencanaDetailDialog from "./bencana-detail-dialog";

const initialData: Bencana[] = [
  {
    id: 1,
    nama: "Banjir Bandar Lampung",
    lokasi: "Bandar Lampung",
    tanggal: "15 Mei 2026",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Gempa Sumatera Barat",
    lokasi: "Padang",
    tanggal: "10 Mei 2026",
    status: "Selesai",
  },
];

export default function DisasterTable() {
  const [data, setData] = useState<Bencana[]>(initialData);

  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const [selected, setSelected] = useState<Bencana | null>(null);

  const [form, setForm] = useState<BencanaForm>({
    nama: "",
    lokasi: "",
    tanggal: "",
    status: "Aktif",
  });

  // OPEN ACTIONS
  const handleAdd = () => {
    setSelected(null);
    setForm({ nama: "", lokasi: "", tanggal: "", status: "Aktif" });
    setOpenForm(true);
  };

  const handleEdit = (item: Bencana) => {
    setSelected(item);
    setForm(item);
    setOpenForm(true);
  };

  const handleDetail = (item: Bencana) => {
    setSelected(item);
    setOpenDetail(true);
  };

  const handleDelete = (item: Bencana) => {
    setSelected(item);
    setOpenDelete(true);
  };

  // SAVE
  const saveData = () => {
    if (selected) {
      setData((prev) =>
        prev.map((d) => (d.id === selected.id ? { ...d, ...form } : d))
      );
    } else {
      setData((prev) => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
    }

    setOpenForm(false);
  };

  // DELETE
  const confirmDelete = () => {
    if (!selected) return;
    setData((prev) => prev.filter((d) => d.id !== selected.id));
    setOpenDelete(false);
  };

  return (
    <div className="w-full space-y-6">

      {/* HEADER (UNCHANGED UI) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#800000]">Kelola Bencana</h1>
          <p className="text-gray-500 mt-2">
            Kelola data bencana yang menjadi dasar campaign donasi.
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#650000] text-white px-5 py-3 rounded-xl transition"
        >
          <PlusCircle size={18} />
          Tambah Bencana
        </button>
      </div>

      {/* STATISTIC (UNCHANGED) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">Total Bencana</p>
          <h2 className="text-4xl font-bold mt-2">25</h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">Bencana Aktif</p>
          <h2 className="text-4xl font-bold text-red-600 mt-2">8</h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">Bencana Selesai</p>
          <h2 className="text-4xl font-bold text-green-600 mt-2">17</h2>
        </div>
      </div>

      {/* SEARCH (UNCHANGED) */}
      <div className="bg-white rounded-2xl border shadow-sm p-5">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari bencana..."
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>
      </div>

      {/* TABLE (UNCHANGED UI) */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-xs uppercase tracking-wider text-gray-400">
                <th className="px-6 py-4 text-left">Nama Bencana</th>
                <th className="px-6 py-4 text-left">Lokasi</th>
                <th className="px-6 py-4 text-left">Tanggal</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="group border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                        <AlertTriangle size={20} className="text-red-600" />
                      </div>
                      <p className="font-medium text-gray-800">{item.nama}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5 flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    {item.lokasi}
                  </td>

                  <td className="px-6 py-5">{item.tanggal}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        item.status === "Aktif"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right space-x-2">
                    <button onClick={() => handleDetail(item)}>
                      Detail
                    </button>
                    <button onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALS */}
      <BencanaFormModal
        open={openForm}
        setOpen={setOpenForm}
        form={form}
        setForm={setForm}
        onSave={saveData}
        isEdit={!!selected}
      />

      <BencanaDeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        onConfirm={confirmDelete}
        data={selected}
      />

      <BencanaDetailDialog
        open={openDetail}
        setOpen={setOpenDetail}
        data={selected}
      />
    </div>
  );
}