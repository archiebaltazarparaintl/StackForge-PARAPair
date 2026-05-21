'use client';

import Link from 'next/link';
import {
    Home,
    Briefcase,
    MessageCircle,
    User,
} from 'lucide-react';

const items = [
    {
        href: '/feed',
        label: 'Feed',
        icon: Home,
    },
    {
        href: '/jobs',
        label: 'Jobs',
        icon: Briefcase,
    },
    {
        href: '/messages',
        label: 'Messages',
        icon: MessageCircle,
    },
    {
        href: '/profile',
        label: 'Profile',
        icon: User,
    },
];

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#111827]/95 backdrop-blur-xl border-t border-white/10">

            <div className="grid grid-cols-4 h-20">

                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-1 text-[#94A3B8] active:scale-95 transition-all"
                        >
                            <Icon className="w-6 h-6" />

                            <span className="text-[11px]">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}