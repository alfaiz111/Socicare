export type BencanaStatus = "Aktif" | "Selesai";

export type Bencana = {
  id: number;
  nama: string;
  lokasi: string;
  tanggal: string;
  status: BencanaStatus;
};

export type BencanaForm = {
  nama: string;
  lokasi: string;
  tanggal: string;
  status: BencanaStatus;
};