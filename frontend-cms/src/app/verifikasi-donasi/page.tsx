"use client";

import VerificationTable from "@/components/verifikasi/verification-table";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";

export default function VerifikasiDonasiPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100">
        
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6">
            <VerificationTable />
          </main>
        </SidebarInset>

      </div>
    </SidebarProvider>
  );
}