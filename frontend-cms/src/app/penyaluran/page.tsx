import DistributionTable from "@/components/penyaluran/distribution-table"

export default function PenyaluranPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#800000]">
          Penyaluran Dana
        </h1>

        <p className="text-gray-500 mt-2">
          Kelola proses penyaluran dana donasi kepada penerima manfaat.
        </p>
      </div>

      <DistributionTable />
    </div>
  )
}