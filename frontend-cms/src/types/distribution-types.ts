export type DistributionStatus = "Disalurkan" | "Pending";

export interface Distribution {
  id: number;
  campaign: string;
  penerima: string;
  nominal: string;
  tanggal: string;
  status: DistributionStatus;
}

export interface DistributionForm {
  campaign: string;
  penerima: string;
  nominal: string;
  tanggal: string;
  status: DistributionStatus;
}
