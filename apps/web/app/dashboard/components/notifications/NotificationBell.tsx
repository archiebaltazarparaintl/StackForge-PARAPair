'use client';

import { Bell } from 'lucide-react';

import Link from 'next/link';

export default function NotificationBell() {
  return (
    <Link
      href="/dashboard/notifications"
      className="relative w-12 h-12 rounded-full border border-[#ECECEC] bg-white flex items-center justify-center hover:shadow-md transition-all"
    >
      <Bell
        size={20}
        className="text-[#FF7A00]"
      />

      {/* NOTIFICATION DOT */}
      <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
    </Link>
  );
}