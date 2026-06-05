"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import DisasterTable from "@/components/bencana/disaster-table";

export default function BencanaPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6">
            <DisasterTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}