"use client"

import { CampaignHeader } from "@/components/campaign/campaign-header"
import { CampaignList } from "@/components/campaign/campaign-list"

export default function CampaignPage() {
  return (
    <div className="p-6 space-y-6">
      <CampaignHeader />
      <CampaignList />
    </div>
  )
}