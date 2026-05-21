import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-[28px] p-6 border border-[#ECECEC] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between mb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center text-[#FF7A00]">
          <Icon size={24} />
        </div>
      </div>

      <div>
        <p className="text-sm text-[#8E8E93] font-medium">
          {title}
        </p>

        <h3 className="mt-2 text-4xl font-black tracking-tight text-[#171717]">
          {value}
        </h3>
      </div>
    </div>
  );
}