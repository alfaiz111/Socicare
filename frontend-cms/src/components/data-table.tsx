"use client"

import * as React from "react"
import { Search } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/* ================= TYPE ================= */
type Donasi = {
  id: number
  nama: string
  email: string
  jumlah: number
  metode: string
  status: "Sukses" | "Pending" | "Gagal"
  tanggal: string
}

/* ================= COMPONENT ================= */
export function DataTable({ data }: { data: Donasi[] }) {
  return (
    <Card className="border border-gray-100 shadow-sm rounded-2xl">

      {/* HEADER */}
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Transaksi Donasi</h2>
          <p className="text-sm text-gray-500">
            Data donasi terbaru dari aplikasi
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <Input
              placeholder="Cari donatur..."
              className="pl-9 w-56"
            />
          </div>

          <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
            Export
          </Button>
        </div>
      </CardHeader>

      {/* TABLE */}
      <CardContent className="pt-0">
        <div className="rounded-xl border overflow-hidden">
          <Table>

            {/* HEADER */}
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Donatur</TableHead>
                <TableHead className="text-right">Jumlah</TableHead>
                <TableHead>Metode</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal</TableHead>
              </TableRow>
            </TableHeader>

            {/* BODY */}
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-gray-50 transition"
                >
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.nama}</p>
                      <p className="text-xs text-gray-500">
                        {item.email}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="text-right font-semibold text-[#7c3aed]">
                    Rp {item.jumlah.toLocaleString("id-ID")}
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary">
                      {item.metode}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>

                  <TableCell className="text-gray-500 text-sm">
                    {item.tanggal}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

/* ================= STATUS BADGE ================= */
function StatusBadge({ status }: { status: string }) {
  if (status === "Sukses") {
    return (
      <Badge className="bg-green-100 text-green-600">
        Sukses
      </Badge>
    )
  }

  if (status === "Pending") {
    return (
      <Badge className="bg-yellow-100 text-yellow-600">
        Pending
      </Badge>
    )
  }

  return (
    <Badge className="bg-red-100 text-red-600">
      Gagal
    </Badge>
  )
}