"use client"

import * as React from "react"
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type Row,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GripVerticalIcon } from "lucide-react"

/* ================= TYPE ================= */
type Donasi = {
  id: number
  nama: string
  email: string
  jumlah: number
  metode: string
  status: string
  tanggal: string
}

/* ================= DRAG ================= */
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({ id })

  return (
    <Button {...attributes} {...listeners} variant="ghost" size="icon">
      <GripVerticalIcon className="size-3 text-maroon-600" />
    </Button>
  )
}

/* ================= COLUMNS ================= */
const columns: ColumnDef<Donasi>[] = [
  { id: "drag", cell: ({ row }) => <DragHandle id={row.original.id} /> },
  { accessorKey: "nama", header: "Donatur" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "jumlah",
    header: () => <div className="text-right">Jumlah</div>,
    cell: ({ row }) => (
      <div className="text-right font-semibold text-maroon-700">
        Rp {row.original.jumlah.toLocaleString("id-ID")}
      </div>
    ),
  },
  {
    accessorKey: "metode",
    header: "Metode",
    cell: ({ row }) => (
      <Badge className="bg-maroon-100 text-maroon-700">
        {row.original.metode}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <Badge
          className={
            status === "Sukses"
              ? "bg-green-500 text-white"
              : status === "Pending"
              ? "bg-yellow-500 text-white"
              : "bg-red-500 text-white"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  { accessorKey: "tanggal", header: "Tanggal" },
]

/* ================= ROW ================= */
function DraggableRow({ row }: { row: Row<Donasi> }) {
  const { transform, transition, setNodeRef } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="hover:bg-maroon-50"
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

/* ================= MAIN ================= */
export function DataTable({ data }: { data: Donasi[] }) {
  const [tableData, setTableData] = React.useState(data)

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => tableData.map((d) => d.id),
    [tableData]
  )

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over }

 = event
    if (!over || active.id === over.id) return

    setTableData((items) => {
      const oldIndex = dataIds.indexOf(active.id)
      const newIndex = dataIds.indexOf(over.id)
      return arrayMove(items, oldIndex, newIndex)
    })
  }

  return (
    <Card className="shadow-xl border-none">
      <CardHeader>
        <Tabs defaultValue="donasi">
          <TabsList className="bg-maroon-100">
            <TabsTrigger value="donasi">Donasi Masuk</TabsTrigger>
            <TabsTrigger value="laporan">Laporan</TabsTrigger>
          </TabsList>

          <TabsContent value="donasi">
            <CardContent className="p-0 mt-4">
              <div className="rounded-xl border border-maroon-200 overflow-hidden">
                <DndContext
                  collisionDetection={closestCenter}
                  modifiers={[restrictToVerticalAxis]}
                  onDragEnd={handleDragEnd}
                  sensors={sensors}
                >
                  <Table>
                    <TableHeader className="bg-maroon-800">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableHead key={header.id} className="text-white">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>

                    <TableBody>
                      <SortableContext
                        items={dataIds}
                        strategy={verticalListSortingStrategy}
                      >
                        {table.getRowModel().rows.map((row) => (
                          <DraggableRow key={row.id} row={row} />
                        ))}
                      </SortableContext>
                    </TableBody>
                  </Table>
                </DndContext>
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="laporan">
            <CardContent className="py-6 text-sm text-muted-foreground">
              Laporan donasi akan ditampilkan di sini...
            </CardContent>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}