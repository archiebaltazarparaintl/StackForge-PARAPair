'use client';

import { motion } from 'framer-motion';
import { Crown, Zap, Rocket, ShieldCheck, X } from 'lucide-react';

export default function UpgradeModal({ onClose }: { onClose: () => void }) {
  const features = [
    { title: 'Unlimited Forging', desc: 'No daily limits on swipes or connections.', icon: Zap },
    { title: 'Forge Rewind', desc: 'Accidentally passed? Bring them back instantly.', icon: Rocket },
    { title: 'Priority Profile', desc: 'Get seen by top talent and companies 3x faster.', icon: Crown },
    { title: 'Incognito Mode', desc: 'Swipe privately. Only matches see your profile.', icon: ShieldCheck },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-[#0D1B2A]/60 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 30, opacity: 0 }} 
        animate={{ scale: 1, y: 0, opacity: 1 }}
        className="relative bg-white w-full max-w-lg rounded-[48px] overflow-hidden shadow-2xl"
      >
        {/* Premium Header */}
        <div className="bg-gradient-to-br from-[#0EA5A5] via-[#0D1B2A] to-[#FF7A00] p-10 text-white text-center relative">
          <div className="absolute top-4 right-4">
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20}/></button>
          </div>
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-xl">
             <Crown size={32} className="text-[#FF7A00]" fill="currentColor" />
          </div>
          <h2 className="text-4xl font-[900] tracking-tighter italic uppercase leading-none">Forge <span className="text-[#FF7A00]">Elite</span></h2>
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mt-2">Level up your collaboration</p>
        </div>

        {/* Features List */}
        <div className="p-10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#F8FBFC] border border-[#E1E8ED] flex items-center justify-center shrink-0 text-[#0EA5A5]">
                  <f.icon size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-[#0D1B2A] leading-none">{f.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Button */}
          <button className="w-full bg-[#0D1B2A] text-white py-5 rounded-[24px] font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center">
            <span>Upgrade to Elite — $19/mo</span>
            <span className="text-[8px] opacity-40 lowercase font-normal mt-1 italic">Cancel anytime. Forge forever.</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}