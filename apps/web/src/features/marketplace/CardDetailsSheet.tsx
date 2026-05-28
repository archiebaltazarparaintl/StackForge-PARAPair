/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { 
  X, Star, BadgeCheck, Zap, 
  
  ShieldCheck, ArrowRight 
} from 'lucide-react';

interface CardDetailsSheetProps {
  item: any;
  mode: 'people' | 'organizations';
  onClose: () => void;
  onPair: () => void;
}

export default function CardDetailsSheet({ item,  onClose, onPair }: CardDetailsSheetProps) {
  const isTalent = item.type === 'talent';

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center p-0 sm:p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm" 
      />
      
      {/* Sheet Content */}
      <motion.div 
        initial={{ y: '100%' }} 
        animate={{ y: 0 }} 
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-white w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[85vh] rounded-t-[40px] sm:rounded-[48px] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Image Area */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img src={item.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-8">
            <div className="flex items-center gap-2 mb-2">
               <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${isTalent ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}>
                  {isTalent ? 'Talent Profile' : 'Enterprise Demand'}
               </div>
               <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-sm border border-white">
                  <span className="text-xs font-black text-[#0D1B2A]">{item.rating}</span>
                  <Star size={10} className="fill-[#FF7A00] text-[#FF7A00]" />
               </div>
            </div>
            <h2 className="text-4xl font-[900] italic tracking-tighter uppercase text-[#0D1B2A] leading-none">{item.name}</h2>
          </div>
        </div>

        {/* Scrollable Details */}
        <div className="flex-1 overflow-y-auto p-8 pt-4 no-scrollbar space-y-8">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-[#F8FBFC] border border-[#E1E8ED] rounded-3xl">
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Primary Role</p>
                <p className="text-sm font-bold text-[#0D1B2A]">{item.role}</p>
             </div>
             <div className="p-4 bg-[#F8FBFC] border border-[#E1E8ED] rounded-3xl">
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Location Hub</p>
                <p className="text-sm font-bold text-[#0D1B2A]">{item.location}</p>
             </div>
          </div>

          {/* Bio Section */}
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0EA5A5] mb-3">Deeper Context</h3>
            <p className="text-sm font-medium leading-relaxed text-slate-500">
              {item.bio}. Built on a foundation of professional excellence and verified achievements within the ParaPair ecosystem.
            </p>
          </section>

          {/* Skill/Requirement Matrix (Spec Page 1) */}
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF7A00] mb-4">Capability Matrix</h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill: string) => (
                <div key={skill} className="px-4 py-2 bg-white border border-[#E1E8ED] rounded-2xl flex items-center gap-2 shadow-sm">
                   <ShieldCheck size={14} className="text-[#0EA5A5]" />
                   <span className="text-xs font-bold text-[#0D1B2A]">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Verification Status (Spec Page 3) */}
          <div className="p-6 bg-[#0D1B2A] rounded-[32px] text-white flex items-center justify-between shadow-xl">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0EA5A5]/20 flex items-center justify-center text-[#0EA5A5]">
                   <BadgeCheck size={28} />
                </div>
                <div>
                   <p className="text-sm font-bold uppercase tracking-tighter">Verified Identity</p>
                   <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Handshake ledger confirmed</p>
                </div>
             </div>
             <Zap className="text-[#FF7A00]" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-white border-t border-[#E1E8ED] flex gap-4 shrink-0">
           <button 
             onClick={onClose}
             className="flex-1 py-4 border-2 border-[#E1E8ED] rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all"
           >
             Dismiss
           </button>
           <button 
             onClick={() => { onPair(); onClose(); }}
             className={`flex-[2] py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${isTalent ? 'bg-[#0EA5A5] shadow-[#0EA5A5]/20' : 'bg-[#FF7A00] shadow-[#FF7A00]/20'}`}
           >
             Pair & Forge <ArrowRight size={16} />
           </button>
        </div>
      </motion.div>
    </div>
  );
}