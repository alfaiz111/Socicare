import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Users,
  Megaphone,
  DollarSign,
} from "lucide-react";

export function SectionCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card
        title="Total Donasi"
        value="Rp 120.000.000"
        change="+12.5%"
        up
        icon={DollarSign}
      />

      <Card
        title="Donasi Hari Ini"
        value="Rp 2.450.000"
        change="+8.2%"
        up
        icon={Wallet}
      />

      <Card
        title="Jumlah Donatur"
        value="1.240"
        change="+5.1%"
        up
        icon={Users}
      />

      <Card
        title="Campaign Aktif"
        value="12"
        change="-2.3%"
        up={false}
        icon={Megaphone}
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
}: {
  title: string;
  value: string;
  change: string;
  up: boolean;
  icon: React.ComponentType<{ size: number }>;
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">{title}</p>

        <div className="p-2 rounded-lg bg-gray-100">
          <Icon size={16} />
        </div>
      </div>

      {/* Value */}
      <h2 className="text-2xl font-semibold mt-3">{value}</h2>

      {/* Change */}
      <div className="flex items-center gap-1 mt-2 text-sm">
        {up ? (
          <ArrowUpRight className="text-green-500" size={16} />
        ) : (
          <ArrowDownRight className="text-red-500" size={16} />
        )}

        <span className={up ? "text-green-500" : "text-red-500"}>
          {change}
        </span>

        <span className="text-gray-400">dari bulan lalu</span>
      </div>
    </div>
  );
}