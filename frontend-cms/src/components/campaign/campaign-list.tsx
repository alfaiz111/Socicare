"use client"

import { CampaignCard } from "./campaign-card"

const data = [
  {
    id: 1,
    title: "Bantu Korban Banjir",
    target: 50000000,
    terkumpul: 32000000,
  },
  {
    id: 2,
    title: "Donasi Pendidikan Anak",
    target: 30000000,
    terkumpul: 21000000,
  },
]

export function CampaignList() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item, i) => (
        <CampaignCard key={item.id} data={item} delay={i * 0.1} />
      ))}
    </div>
  )
}