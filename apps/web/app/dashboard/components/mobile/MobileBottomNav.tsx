'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import {
  LayoutDashboard,
  Sparkles,
  MessageCircle,
  Bell,
  User,
} from 'lucide-react';

const links = [
  {
    label: 'Home',
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
    label: 'Alerts',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    label: 'Profile',
    href: '/dashboard/profile',
    icon: User,
  },
];

export default function MobileBottomNav() {
  const pathname =
    usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="backdrop-blur-xl bg-white/90 border border-[#ECECEC] shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full h-[74px] flex items-center justify-around">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname ===
            item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 relative"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  active
                    ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white shadow-lg scale-110'
                    : 'text-slate-500'
                }`}
              >
                <Icon size={20} />
              </div>

              <span
                className={`text-[10px] font-semibold ${
                  active
                    ? 'text-[#FF7A00]'
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}