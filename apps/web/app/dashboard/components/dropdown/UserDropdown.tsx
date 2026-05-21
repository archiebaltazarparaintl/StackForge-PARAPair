'use client';

export default function UserDropdown() {
  return (
    <button className="flex items-center gap-3 bg-white border border-[#ECECEC] rounded-full px-2 py-2 shadow-sm hover:shadow-md transition-all">
      <div className="hidden sm:block text-right">
        <p className="font-semibold text-sm">
          User
        </p>

        <p className="text-[11px] text-slate-500">
          Online
        </p>
      </div>

      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547]" />
    </button>
  );
}