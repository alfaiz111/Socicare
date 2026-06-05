"use client";

import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DonaturTable from "@/components/donatur/donatur-table";

export default function DonaturPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f5f5f7]">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#800000]">Donatur</h1>

              <p className="mt-1 text-gray-500">
                Kelola data donatur yang terdaftar pada platform.
              </p>
            </div>

            <DonaturTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
