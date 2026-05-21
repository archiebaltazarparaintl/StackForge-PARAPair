'use client';

import {
  Bell,
  Search,
} from 'lucide-react';

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#ECECEC] bg-white/80 backdrop-blur-xl">
      <div className="h-20 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3 bg-[#FAFAFA] rounded-full px-5 h-12 w-full max-w-md border border-[#ECECEC]">
          <Search size={18} />

          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>

        <button className="relative w-12 h-12 rounded-full bg-[#FFF1E4] flex items-center justify-center text-[#FF7A00]">
          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}