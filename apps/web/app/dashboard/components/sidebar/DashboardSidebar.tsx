'use client';

import Link from "next/dist/client/link";

  MessageCircle,
  Bell,
  User,
  Briefcase,
  Shield,
  Settings,
} from 'lucide-react';

const items = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Messages',
    href: '/dashboard/personal/inbox',
    icon: MessageCircle,
  },
  {
    label: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    label: 'Profile',
    href: '/dashboard/personal/profile',
    icon: User,
  },
  {
    label: 'Business',
    href: '/dashboard/business',
    icon: Briefcase,
  },
  {
    label: 'Admin',
    href: '/dashboard/admin',
    icon: Shield,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[290px] border-r border-[#ECECEC] bg-white/90 backdrop-blur-xl p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-black tracking-tight text-[#171717]">
          PARA
          <span className="text-[#FF7A00]">
            PAIR
          </span>
        </h1>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                active
                  ? 'bg-[#FF7A00] text-white shadow-lg'
                  : 'hover:bg-[#FFF1E4] text-[#5F6368]'
              }`}
            >
              <Icon size={22} />

              <span className="font-semibold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}