'use client';

import { ReactNode } from 'react';
import { BottomNav } from '@/components/navigation/BottonNav';

interface Props {
    children: ReactNode;
}

export function AppLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-[#0D1B2A] text-white">
            <main className="pb-24 lg:pb-0">
                {children}
            </main>

            <BottomNav />
        </div>
    );
}