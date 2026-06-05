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

  const confirmDelete = () => {
    if (!selected) return;
    setData((prev) => prev.filter((d) => d.id !== selected.id));
    setOpenDelete(false);
  };

  return (
    <div className="w-full space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Kelola Bencana
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Kelola data bencana untuk campaign donasi secara terpusat.
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl shadow-sm transition"
        >
          <PlusCircle size={18} />
          Tambah Bencana
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Total Bencana</p>
          <h2 className="text-3xl font-semibold mt-2 text-gray-900">25</h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Bencana Aktif</p>
          <h2 className="text-3xl font-semibold mt-2 text-red-600">8</h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">Bencana Selesai</p>
          <h2 className="text-3xl font-semibold mt-2 text-emerald-600">17</h2>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white border rounded-2xl p-4 shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari bencana, lokasi, atau status..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                       focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">

          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-xs uppercase tracking-wider text-gray-500">
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
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >

                  {/* NAME */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                        <AlertTriangle size={18} className="text-red-500" />
                      </div>

                      <p className="font-medium text-gray-900">
                        {item.nama}
                      </p>
                    </div>
                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-5 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-gray-400" />
                      {item.lokasi}
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5 text-gray-600">
                    {item.tanggal}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        item.status === "Aktif"
                          ? "bg-red-50 text-red-600 border-red-100"
                          : "bg-emerald-50 text-emerald-600 border-emerald-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => handleDetail(item)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                      >
                        Detail
                      </button>

                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                      >
                        Hapus
                      </button>

                    </div>
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