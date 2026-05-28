'use client';

import Link from 'next/link';
import { Lock, ArrowRight, Sparkles, BadgeCheck } from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '700', '800'] });

export default function MatchResultsPage() {
  return (
    <div className={`${jakarta.className} min-h-screen bg-[#F8FBFC] flex flex-col items-center justify-center p-6 relative overflow-hidden text-[#0D1B2A]`}>
      
      <div className="max-w-xl w-full text-center relative z-10">
        <div className="w-20 h-20 bg-white border border-[#E1E8ED] rounded-[28px] shadow-xl flex items-center justify-center mx-auto mb-6">
          <Sparkles size={40} className="text-[#FF7A00]" />
        </div>
        <h1 className="text-4xl font-[900] italic uppercase tracking-tighter leading-none">
          Potential <span className="text-[#0EA5A5]">Found!</span>
        </h1>
        <p className="mt-4 text-slate-500 font-medium italic">We found multiple companies aligned with your interests.</p>

        {/* BLURRED GHOST LIST */}
        <div className="mt-12 space-y-4 relative">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-[#E1E8ED] rounded-[32px] p-6 flex items-center justify-between shadow-sm opacity-40 blur-md pointer-events-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100" />
                <div className="text-left space-y-2">
                  <div className="h-4 w-32 bg-slate-200 rounded-full" />
                  <div className="h-3 w-24 bg-slate-100 rounded-full" />
                </div>
              </div>
              <BadgeCheck size={24} className="text-slate-200" />
            </div>
          ))}

          {/* LOCK OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center flex-col p-8">
            <div className="w-16 h-16 bg-[#0D1B2A] text-white rounded-full flex items-center justify-center shadow-2xl mb-6 animate-bounce">
              <Lock size={28} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tighter">Forge Identity Required</h2>
            <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-relaxed">
              Create your professional account <br/> to reveal these matches.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <Link 
            href="/register"
            className="h-16 px-12 rounded-full bg-[#FF7A00] text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-[#FF7A00]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            Claim My Matches <ArrowRight size={20} />
          </Link>
          <Link href="/login" className="block text-xs font-bold uppercase tracking-widest text-[#0EA5A5] hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}