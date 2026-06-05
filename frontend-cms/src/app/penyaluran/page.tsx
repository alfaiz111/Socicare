"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import DistributionTable from "@/components/penyaluran/distribution-table";

export default function PenyaluranPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f5f5f7]">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6">
            <DistributionTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
