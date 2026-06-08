export interface Donatur {
  id: number;
  nama: string;
  email: string;
  totalDonasi: string;
  jumlahDonasi: number;
  status: "Aktif" | "Tidak Aktif";
}