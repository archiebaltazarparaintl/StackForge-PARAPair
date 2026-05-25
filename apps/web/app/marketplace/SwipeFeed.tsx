/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { X, Sparkles, Star, RotateCcw, Crown, User, Building2 } from 'lucide-react';

// --- MOCK DATA ---
const APPLICANTS = [
  { id: 'a1', name: 'Kevin France', role: 'Fullstack Developer', bio: 'Expert in Next.js/NestJS.', skills: ['React', 'Node.js'], image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800' },
  { id: 'a2', name: 'Maya L.', role: 'Designer', location: 'London, UK', rating: 4.8, bio: 'Minimalist approach to SaaS design.', skills: ['Figma', 'Prototyping'], image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', type: 'talent', isPremium: false },
];

const COMPANIES = [
  { id: 'c1', name: 'StackForge', role: 'Enterprise Agency', location: 'Silicon Valley', rating: 5.0, bio: 'We forge high-scale cloud solutions.', skills: ['Cloud', 'AI', 'Security'], image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', type: 'business', isPremium: true },
];

// --- SUB-COMPONENT: SWIPE CARD (Added myIdentity logic) ---
const SwipeCard = React.memo(({ item, controls, x, rotate, onDragEnd, mode, myIdentity }: any) => {
  const isTalent = item.type === 'talent';
  
  return (
    <motion.div
      style={{ x, rotate, willChange: "transform" }}
      animate={controls}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      className={`absolute inset-0 bg-white rounded-[40px] shadow-2xl border overflow-hidden flex flex-col cursor-grab active:cursor-grabbing ${
        item.isPremium ? 'border-[#FF7A00] ring-4 ring-[#FF7A00]/5' : 'border-slate-100'
      }`}
    >
      {/* PREMIUM OVERLAY */}
      {item.isPremium && (
        <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1 tracking-widest">
          <Crown size={10} fill="currentColor" /> Elite
        </div>
      )}

      {/* IMAGE SECTION */}
      <div className="relative h-[320px] pointer-events-none">
        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
        
        {/* IDENTITY TYPE BADGE */}
        <div className="absolute bottom-5 left-5 z-20">
            <div className={`px-3 py-1.5 rounded-2xl text-[8px] font-black uppercase tracking-widest text-white shadow-lg flex items-center gap-1.5 backdrop-blur-md ${
              isTalent ? 'bg-[#0EA5A5]/90' : 'bg-[#FF7A00]/90'
            }`}>
                {isTalent ? <User size={10} /> : <Building2 size={10} />}
                {isTalent ? 'Talent' : 'Enterprise'}
            </div>
        </div>

        {/* RATING BADGE */}
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm border border-white/50">
          <span className="text-[11px] font-[800] text-[#0D1B2A]">{item.rating}</span>
          <Star size={10} className={`fill-current ${mode === 'people' ? 'text-[#FF7A00]' : 'text-[#0EA5A5]'}`} />
        </div>

        {/* NEW: MY IDENTITY INDICATOR (The "Swiping As" Badge) */}
        <div className="absolute bottom-5 right-5 z-20">
          <div className="px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-sm flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${myIdentity === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`} />
            <span className="text-[9px] font-black uppercase text-[#0D1B2A] tracking-tighter">
              As {myIdentity}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-2xl font-[900] text-[#0D1B2A] tracking-tighter leading-none italic uppercase">{item.name}</h3>
        <p className={`${isTalent ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'} font-black text-[11px] uppercase tracking-widest`}>{item.role}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {item.skills.map((skill: string) => (
            <span key={skill} className="px-3 py-1 bg-[#F3F6F9] text-[#0D1B2A] rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-100">{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

SwipeCard.displayName = 'SwipeCard';

// --- MAIN COMPONENT ---
const SwipeFeed = forwardRef(({ mode, onMatch, myIdentity = 'personal' }: { mode: 'people' | 'organizations', onMatch: (d: any) => void, myIdentity?: 'personal' | 'business' }, ref) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);

  const currentList = useMemo(() => (mode === 'people' ? APPLICANTS : COMPANIES), [mode]);
  const item = currentList[index];

  const handleAction = useCallback(async (direction: 'left' | 'right') => {
    if (!item || isAnimating) return;
    setIsAnimating(true);
    
    await controls.start({
      x: direction === 'right' ? 600 : -600,
      opacity: 0,
      rotate: direction === 'right' ? 20 : -20,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    });

    if (direction === 'right') {
      // Logic: Pass the user's current identity to the match result
      onMatch({ ...item, swipedAs: myIdentity });
    }
    
    setIndex(prev => prev + 1);
    controls.set({ x: 0, opacity: 1, rotate: 0 });
    x.set(0);
    setIsAnimating(false);
  }, [item, isAnimating, controls, onMatch, x, myIdentity]);

  useImperativeHandle(ref, () => ({
    swipeRight: () => handleAction('right'),
    swipeLeft: () => handleAction('left'),
  }));

  return (
    <div className="relative w-full max-w-[360px] h-[580px] flex flex-col items-center">
      <div className="relative w-full h-[520px]">
        <AnimatePresence mode="popLayout">
          {item ? (
            <SwipeCard 
              key={item.id} 
              item={item} 
              controls={controls} 
              x={x} 
              rotate={rotate} 
              mode={mode}
              myIdentity={myIdentity} // Pass identity down
              onDragEnd={(_: any, info: any) => {
                if (info.offset.x > 100) handleAction('right');
                else if (info.offset.x < -100) handleAction('left');
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white rounded-[40px] border-2 border-dashed border-slate-200 backdrop-blur-sm">
              <RotateCcw size={40} className="text-[#0EA5A5] mb-4 cursor-pointer" onClick={() => setIndex(0)} />
              <p className="font-black uppercase tracking-widest text-[10px] text-slate-400">Feed Refreshed</p>
            </div>
          )}
        </AnimatePresence>
      </div>
      
      {item && (
        <div className="flex justify-center items-center gap-4 w-full px-4 mt-8">
          <button onClick={() => handleAction('left')} className="flex-1 bg-white h-12 rounded-[18px] border border-slate-200 flex items-center justify-center gap-2 text-[#0D1B2A] font-black text-[10px] uppercase shadow-md active:scale-90 transition-all">
            <X size={14} strokeWidth={3} /> Pass
          </button>
          <button onClick={() => handleAction('right')} className={`flex-1 h-12 rounded-[18px] border-4 border-white flex items-center justify-center gap-2 text-white font-black text-[10px] uppercase shadow-lg active:scale-90 transition-all ${myIdentity === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}>
            <Sparkles size={14} fill="currentColor" /> Pair
          </button>
        </div>
      )}
    </div>
  );
});

SwipeFeed.displayName = 'SwipeFeed';
export default SwipeFeed;