'use client';

import { useRouter } from 'next/navigation';
import { Search, MessageSquare, User, Star } from 'lucide-react';

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-8 py-4 flex justify-between items-center z-40 pb-8">
      <button onClick={() => router.push('/search')} className="flex flex-col items-center gap-1.5 text-slate-300">
        <Search size={22} strokeWidth={2.5} />
        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Explore</span>
      </button>
      <button onClick={() => router.push('/pairs')} className="flex flex-col items-center gap-1.5 text-[#0EA5A5]">
        <div className="relative">
          <User size={22} strokeWidth={3} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF7A00] rounded-full border-2 border-white" />
        </div>
        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Pairs</span>
      </button>
      
      <div className="absolute left-1/2 -translate-x-1/2 -top-12">
        <button className="relative w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center text-white shadow-2xl border-[6px] border-white active:scale-90 transition-all">
          <Star size={28} fill="currentColor" />
        </button>
      </div>

      <button onClick={() => router.push('/messages')} className="flex flex-col items-center gap-1.5 text-slate-300">
        <MessageSquare size={22} strokeWidth={2.5} />
        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Chats</span>
      </button>
      <button onClick={() => router.push('/profile')} className="flex flex-col items-center gap-1.5 text-slate-300">
        <User size={22} strokeWidth={2.5} />
        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Profile</span>
      </button>
    </nav>
  );
}
