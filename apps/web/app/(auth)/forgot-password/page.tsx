'use client';

import Link from 'next/link';
import { Exo_2 } from 'next/font/google';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';

const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function ForgotPasswordPage() {
  return (
    <div className={`${exo2.className} min-h-screen bg-[#F4F7FA] flex items-center justify-center px-4 py-8`}>
      <div className="w-full max-w-6xl bg-white overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] grid lg:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex relative bg-[#0EA5A5] overflow-hidden">
          <div className="absolute top-0 right-[-120px] w-[240px] h-full bg-white rounded-l-[120px]" />
          <div className="relative z-10 flex flex-col justify-between p-16 text-white max-w-[480px]">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="flex -space-x-1.5">
                  <div className="w-9 h-9 rounded-xl border-2 border-white flex items-center justify-center font-extrabold text-[10px]">P</div>
                  <div className="w-9 h-9 rounded-xl border-2 border-[#FF7A00] bg-[#FF7A00] flex items-center justify-center font-extrabold text-[10px] text-white">P</div>
                </div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-70">Recovery</span>
              </div>
              <h1 className="text-[76px] font-[800] leading-none tracking-tighter mb-8">
                <span className="text-white">PARA</span>
                <span className="text-[#FF7A00]">PAIR</span>
              </h1>
              <p className="text-xl leading-relaxed text-white/90 font-medium tracking-tight">Recover your account securely to continue building connections.</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white flex flex-col items-center justify-center px-6 py-12 lg:px-16">
          <div className="w-full max-w-[400px]">

            <div className="text-center mb-10">
              <h2 className="text-[44px] font-bold text-[#0D1B2A] tracking-tight">Forgot Password?</h2>
              <p className="text-slate-400 mt-2 font-medium">We&rsquo;ll send a link to your email</p>
            </div>

            <div className="bg-white rounded-[32px] border border-[#E7EEF3] shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-8 sm:p-10 text-[#0D1B2A]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-widest mb-3 ml-1 text-slate-500">E-mail Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#0EA5A5] transition-colors" />
                    <input type="email" placeholder="Enter your email" className="w-full h-14 rounded-2xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-4 text-[15px] font-medium outline-none focus:border-[#0EA5A5] focus:bg-white transition-all" />
                  </div>
                </div>

                <button className="w-full h-14 rounded-2xl bg-[#FF7A00] hover:bg-[#e66e00] text-white text-base font-bold shadow-lg shadow-[#FF7A00]/20 transition-all active:scale-[0.98]">
                  Send Reset Link
                </button>

                <Link href="/login" className="w-full h-14 rounded-2xl border border-[#0EA5A5] text-[#0EA5A5] hover:bg-[#0EA5A5]/5 transition-all flex items-center justify-center gap-2 font-black text-[11px] uppercase tracking-tighter">
                  <ArrowLeft className="w-4 h-4" /> Back to Login
                </Link>
              </form>
            </div>

            <div className="mt-10 flex flex-col items-center opacity-40">
              <div className="flex items-center gap-2 text-[#0D1B2A] font-black text-[10px] uppercase tracking-widest">
                <ShieldCheck size={14} className="text-[#0EA5A5]" /> Secure Recovery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}