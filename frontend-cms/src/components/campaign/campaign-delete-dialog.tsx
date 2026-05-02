"use client"

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export function CampaignDeleteDialog({
  open,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-75 text-center shadow-lg">

        <p className="text-gray-700">
          Yakin ingin menghapus campaign ini?
        </p>

        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
}