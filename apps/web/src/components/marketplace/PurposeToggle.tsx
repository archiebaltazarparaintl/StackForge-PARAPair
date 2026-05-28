'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, User } from 'lucide-react';

interface PurposeToggleProps {
  purpose: 'hire' | 'work';
  onChange: (val: 'hire' | 'work') => void;
}

export default function PurposeToggle({ purpose, onChange }: PurposeToggleProps) {
  return (
    <div className="relative w-full max-w-[280px] h-12 bg-white rounded-full flex items-center shadow-lg border border-slate-100 overflow-hidden cursor-pointer group">
      
      {/* 1. DUAL COLOR BACKGROUND TRACK */}
      <div className="absolute inset-0 flex">
         <div 
           onClick={() => onChange('hire')}
           className="w-1/2 h-full bg-[#FF7A00] transition-brightness duration-300 hover:brightness-110" 
         />
         <div 
           onClick={() => onChange('work')}
           className="w-1/2 h-full bg-[#0EA5A5] transition-brightness duration-300 hover:brightness-110" 
         />
      </div>

      {/* 2. STATIC TEXT LABELS (Behind the knob) */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="flex-1 flex items-center justify-center pl-6">
          <span className={`text-[10px] font-black uppercase tracking-tighter transition-opacity duration-300 ${purpose === 'hire' ? 'text-white' : 'text-white/40'}`}>
            Hire / Buy
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center pr-6">
          <span className={`text-[10px] font-black uppercase tracking-tighter transition-opacity duration-300 ${purpose === 'work' ? 'text-white' : 'text-white/40'}`}>
            Work / Sell
          </span>
        </div>
      </div>

      {/* 3. THE SLIDING KNOB (The white circle with the dynamic icon) */}
      <motion.div
        initial={false}
         animate={{ x: purpose === 'hire' ? '4px' : '236px' }} 
        transition={{ type: "spring", stiffness: 450, damping: 35 }}
        className="absolute z-20"
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border border-slate-50 transition-transform active:scale-90">
           {purpose === 'hire' ? (
             <motion.div
               key="hire-icon"
               initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
             >
               <ShoppingBag size={18} className="text-[#FF7A00]" strokeWidth={2.5} />
             </motion.div>
           ) : (
             <motion.div
               key="work-icon"
               initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
             >
               <User size={18} className="text-[#0EA5A5]" strokeWidth={2.5} />
             </motion.div>
           )}
        </div>
      </motion.div>

      {/* 4. INVISIBLE CLICK TARGETS (Top layer) */}
      <div className="absolute inset-0 flex z-10">
        <div onClick={() => onChange('hire')} className="flex-1 h-full" />
        <div onClick={() => onChange('work')} className="flex-1 h-full" />
      </div>
    </div>
  );
}