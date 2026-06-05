"use client";

import { useEffect, useState } from "react";
import { Campaign } from "@/types/campaign";

import { AppSidebar } from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { CampaignTable } from "@/components/campaign/campaign-table";
import { CampaignFormModal } from "@/components/campaign/campaign-form-modal";
import { CampaignDeleteDialog } from "@/components/campaign/campaign-delete-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Loader2 } from "lucide-react";

export default function CampaignPage() {
  /* ================= STATE ================= */
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);

  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState<Campaign | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/campaign");
        const data = await res.json();

        setCampaigns(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= HANDLER ================= */
  const handleCreate = () => {
    setEditData(null);
    setOpenForm(true);
  };

  const handleEdit = (item: Campaign) => {
    setEditData(item);
    setOpenForm(true);
  };

  const handleSubmit = (values: Campaign) => {
    setCampaigns((prev) => {
      if (editData) {
        return prev.map((item) =>
          item.id === editData.id ? { ...values, id: item.id } : item,
        );
      }

      return [...prev, { ...values, id: Date.now() }];
    });

    setOpenForm(false);
    setEditData(null);
  };

  const handleDelete = () => {
    if (deleteId === null) return;

    setCampaigns((prev) => prev.filter((item) => item.id !== deleteId));

    setDeleteId(null);
  };

  /* ================= UI ================= */
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100">
        <AppSidebar />

        <SidebarInset className="flex-1">
          <TopBar />

          <main className="p-6">
           <div className="flex items-center justify-end mb-6">
  <button
    onClick={handleCreate}
    className="px-4 py-2 rounded-xl bg-[#800000] text-white text-sm font-medium shadow hover:bg-[#660000] transition"
  >
    + Tambah Campaign
  </button>
</div>

            {/* CARD */}
            <Card className="rounded-2xl shadow-sm border-0">
              <CardHeader className="border-b">
                <CardTitle>Daftar Campaign</CardTitle>
                <CardDescription>
                  Total {campaigns.length} campaign
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 mr-2 animate-spin text-[#800000]" />
                    <span className="text-gray-500">
                      Memuat data campaign...
                    </span>
                  </div>
                ) : (
                  <CampaignTable
                    data={campaigns}
                    onEdit={handleEdit}
                    onDelete={(id) => setDeleteId(id)}
                  />
                )}
              </CardContent>
            </Card>
          </main>
        </SidebarInset>

        {/* MODAL FORM */}
        <CampaignFormModal
          open={openForm}
          onClose={() => {
            setOpenForm(false);
            setEditData(null);
          }}
          onSubmit={handleSubmit}
          initialData={editData}
        />

        {/* DELETE DIALOG */}
        <CampaignDeleteDialog
          open={deleteId !== null}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      </div>
    </SidebarProvider>
  );
}
