"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { date: "2026-04-01", donasi: 1200000 },
  { date: "2026-04-02", donasi: 800000 },
  { date: "2026-04-03", donasi: 1500000 },
  { date: "2026-04-04", donasi: 2200000 },
  { date: "2026-04-05", donasi: 1800000 },
  { date: "2026-04-06", donasi: 2500000 },
  { date: "2026-04-07", donasi: 2000000 },
];

const chartConfig = {
  donasi: {
    label: "Donasi",
    color: "#800000",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const total = chartData.reduce((acc, item) => acc + item.donasi, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className="
        relative overflow-hidden rounded-3xl
        border border-[#f1dede]
        bg-linear-to-b from-[#fffafa] to-[#fdf2f2]
        shadow-sm hover:shadow-lg transition-all duration-300
      "
      >
        {/* subtle glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#800000]/10 blur-3xl rounded-full" />

        {/* HEADER */}
        <CardHeader className="flex flex-row items-start justify-between pb-2 relative z-10">
          <div>
            <p className="text-sm text-gray-500">Total Donasi</p>

            <h2 className="text-3xl font-semibold text-gray-800 mt-1 tracking-tight">
              Rp {total.toLocaleString("id-ID")}
            </h2>

            <div className="flex items-center gap-1 text-sm mt-2 text-green-600">
              <ArrowUpRight size={16} />
              +12.5% bulan ini
            </div>
          </div>
        </CardHeader>

        {/* CHART */}
        <CardContent className="pt-4 relative z-10">
          <ChartContainer config={chartConfig} className="h-65 w-full">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="donasiGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#800000" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#800000" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#f3dcdc"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                  });
                }}
                className="text-xs text-gray-400"
              />

              <ChartTooltip
                cursor={{ stroke: "#e5caca", strokeDasharray: "3 3" }}
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
                stroke="#800000"
                strokeWidth={2.5}
                fill="url(#donasiGradient)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#800000",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
