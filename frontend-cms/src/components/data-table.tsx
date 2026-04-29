"use client"

import * as React from "react"
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
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

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

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
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7 hover:bg-red-100"
    >
      <GripVerticalIcon className="size-4 text-red-700" />
    </Button>
  )
}

/* ================= COLUMNS ================= */
const columns: ColumnDef<Donasi>[] = [
  {
    id: "drag",
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    accessorKey: "nama",
    header: "Donatur",
    cell: ({ row }) => (
      <div>
        <p className="font-semibold text-gray-800">{row.original.nama}</p>
        <p className="text-xs text-gray-500">{row.original.email}</p>
      </div>
    ),
  },
  {
    accessorKey: "jumlah",
    header: () => <div className="text-right">Jumlah</div>,
    cell: ({ row }) => (
      <div className="text-right font-bold text-red-700 text-base">
        Rp {row.original.jumlah.toLocaleString("id-ID")}
      </div>
    ),
  },
  {
    accessorKey: "metode",
    header: "Metode",
    cell: ({ row }) => (
      <Badge className="bg-red-100 text-red-700 border-none">
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
  {
    accessorKey: "tanggal",
    header: "Tanggal",
  },
]

/* ================= ROW ================= */
function DraggableRow({ row }: { row: Row<Donasi> }) {
  const { transform, transition, setNodeRef } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className="hover:bg-red-50 even:bg-gray-50 transition"
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
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => tableData.map((d) => d.id),
    [tableData]
  )
 // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active.id !== over?.id) {
      setTableData((items) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over!.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <Card className="shadow-xl border-0 rounded-2xl">
      <CardHeader>

        {/* TABS */}
        <Tabs defaultValue="donasi">
          <TabsList className="bg-red-100 p-1 rounded-lg">
            <TabsTrigger
              value="donasi"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Donasi Masuk
            </TabsTrigger>
            <TabsTrigger
              value="laporan"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Laporan
            </TabsTrigger>
          </TabsList>

          {/* TABLE */}
          <TabsContent value="donasi">
            <CardContent className="p-0 mt-5">

              <div className="rounded-xl border border-red-200 overflow-hidden">

                <DndContext
                  collisionDetection={closestCenter}
                  modifiers={[restrictToVerticalAxis]}
                  onDragEnd={handleDragEnd}
                  sensors={sensors}
                >
                  <Table>

                    {/* HEADER */}
                    <TableHeader className="bg-red-800">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableHead
                              key={header.id}
                              className="text-white font-semibold"
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>

                    {/* BODY */}
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
            <CardContent className="py-10 text-center text-gray-500">
              Laporan donasi akan tampil di sini
            </CardContent>
          </TabsContent>

        </Tabs>

      </CardHeader>
    </Card>
  )
}