'use client';

import Link from 'next/link';

import {
  LayoutDashboard,
  Bell,
  User,
  MessageCircle,
  Settings,
  Sparkles,
} from 'lucide-react';

import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Discover',
    href: '/dashboard/discover',
    icon: Sparkles,
  },
  {
    label: 'Inbox',
    href: '/dashboard/inbox',
    icon: MessageCircle,
  },
  {
    label: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    label: 'Profile',
    href: '/dashboard/profile',
    icon: User,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname =
    usePathname();

  return (
    <aside className="hidden lg:flex w-[280px] border-r border-[#ECECEC] bg-white min-h-screen p-6 flex-col sticky top-0">
      <div className="mb-10">
        <h1 className="text-3xl font-black tracking-tight">
          PARA
          <span className="text-[#FF7A00]">
            PAIR
          </span>
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Professional Discovery
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname ===
            item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-semibold ${
                active
                  ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white shadow-lg'
                  : 'hover:bg-[#FFF1E4] text-slate-700'
              }`}
            >
              <Icon size={20} />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}