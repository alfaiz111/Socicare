import { VerificationTable } from "@/components/verifikasi/verification-table"

export default function VerifikasiDonasiPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Verifikasi Donasi
        </h1>

        <p className="text-gray-500 mt-1">
          Kelola dan verifikasi pembayaran donasi dari donatur.
        </p>
      </div>

      <VerificationTable />
    </div>
  )
}