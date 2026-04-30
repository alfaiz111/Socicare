"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Users,
  Megaphone,
  DollarSign,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export function SectionCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card
        title="Total Donasi"
        value="Rp 120.000.000"
        change="+12.5%"
        up
        icon={DollarSign}
        delay={0}
      />

      <Card
        title="Donasi Hari Ini"
        value="Rp 2.450.000"
        change="+8.2%"
        up
        icon={Wallet}
        delay={0.1}
      />

      <Card
        title="Jumlah Donatur"
        value="1.240"
        change="+5.1%"
        up
        icon={Users}
        delay={0.2}
      />

      <Card
        title="Campaign Aktif"
        value="12"
        change="-2.3%"
        up={false}
        icon={Megaphone}
        delay={0.3}
      />
    </div>
  );
}

function Card({
  title,
  value,
  change,
  up,
  icon: Icon,
  delay,
}: {
  title: string;
  value: string;
  change: string;
  up: boolean;
  icon: LucideIcon;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="p-5 rounded-2xl border border-[#f3e8e8] 
                 bg-linear-to-b from-[#fffafa] to-[#fdf2f2]
                 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">{title}</p>

        <div className="p-2 rounded-xl bg-linear-to-br from-[#f3d6d6] to-[#f8eaea]">
          <Icon size={18} className="text-[#800000]" />
        </div>
      </div>

      {/* VALUE */}
      <h2 className="text-2xl font-semibold mt-4 tracking-tight text-gray-800">
        {value}
      </h2>

      {/* CHANGE */}
      <div className="flex items-center gap-1 mt-3 text-sm">
        {up ? (
          <ArrowUpRight className="text-green-600" size={16} />
        ) : (
          <ArrowDownRight className="text-red-600" size={16} />
        )}

        <span
          className={`font-medium ${
            up ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>

        <span className="text-gray-400">bulan ini</span>
      </div>
    </motion.div>
  );
}