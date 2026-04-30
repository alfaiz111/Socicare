"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ArrowUpRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { date: "2026-04-01", donasi: 1200000 },
  { date: "2026-04-02", donasi: 800000 },
  { date: "2026-04-03", donasi: 1500000 },
  { date: "2026-04-04", donasi: 2200000 },
  { date: "2026-04-05", donasi: 1800000 },
  { date: "2026-04-06", donasi: 2500000 },
  { date: "2026-04-07", donasi: 2000000 },
]

const chartConfig = {
  donasi: {
    label: "Donasi",
    color: "#7c3aed",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const total = chartData.reduce((acc, item) => acc + item.donasi, 0)

  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition rounded-2xl">
      
      {/* HEADER PREMIUM */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <p className="text-sm text-gray-500">Total Donasi</p>
          <h2 className="text-2xl font-semibold">
            Rp {total.toLocaleString("id-ID")}
          </h2>

          <div className="flex items-center gap-1 text-sm mt-1 text-green-500">
            <ArrowUpRight size={16} />
            +12.5% bulan ini
          </div>
        </div>
      </CardHeader>

      {/* CHART */}
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="h-65 w-full">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="donasiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#eee"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                })
              }}
            />

            <ChartTooltip
              cursor={{ stroke: "#ccc", strokeDasharray: "3 3" }}
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    `Rp ${Number(value).toLocaleString("id-ID")}`
                  }
                />
              }
            />

            <Area
              type="monotone"
              dataKey="donasi"
              stroke="#7c3aed"
              strokeWidth={2.5}
              fill="url(#donasiGradient)"
              dot={false}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}