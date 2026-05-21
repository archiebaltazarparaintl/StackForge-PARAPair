'use client';

import NotificationBell from './NotificationBell';

import UserDropdown from '../dropdown/UserDropdown';

export default function DashboardNavbar() {
  return (
    <header className="h-[80px] bg-[#FFFDFC]/80 backdrop-blur-xl border-b border-[#ECECEC] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-40">
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#171717]">
          Dashboard
        </h2>

        <p className="hidden sm:block text-sm text-slate-500">
          Welcome back to PARAPAIR
        </p>
      </div>

      <div className="flex items-center gap-3">
        <NotificationBell />

        <UserDropdown />
      </div>
    </header>
  );
}