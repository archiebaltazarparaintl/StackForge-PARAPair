"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center text-white p-6">
      <div className="text-[#FF7A00] font-bold text-5xl tracking-tighter mb-4 italic">
        PA<span className="text-[#0EA5A5]">RA</span>PAIR
      </div>
      <p className="text-[#0EA5A5] uppercase tracking-[0.3em] font-bold text-sm mb-12">
        Pair With Purpose
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/login" className="bg-[#FF7A00] text-center py-4 rounded-xl font-black tracking-widest hover:bg-orange-600 transition-all">
          ENTER MARKETPLACE
        </Link>
        <Link href="/register" className="border-2 border-[#0EA5A5] text-[#0EA5A5] text-center py-4 rounded-xl font-black tracking-widest hover:bg-[#0EA5A5]/10 transition-all">
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
}
