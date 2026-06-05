export type DonationStatus = "Pending" | "Disetujui" | "Ditolak";

export interface Donation {
  id: number;
  nama: string;
  campaign: string;
  nominal: string;
  tanggal: string;
  status: DonationStatus;
}