/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useRef, Suspense, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  MessageCircle, 
  User, 
  Sparkles, 
  Building2, 
  Bell, 
  Crown, 
  TrendingUp, 
  Bookmark, 
  Zap, 
  Eye, 
  Share2, 
  Activity,
  UserCircle,
  ChevronRight} from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import dynamic from 'next/dynamic';

// Components
import SwipeFeed from '@/components/marketplace/SwipeFeed';
import PurposeToggle from '@/components/marketplace/SwipeFeed';

const MatchOverlay = dynamic(() => import('../../src/components/marketplace/MatchOverlay'), { ssr: false });
const CardDetailsSheet = dynamic(() => import('../../src/components/marketplace/CardDetailsSheet'), { ssr: false });

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'] 
});

export default function MarketplacePage() {
  const router = useRouter();
  const feedRef = useRef<any>(null);
  
  // --- INDEPENDENT CORE STATES ---
  const [purpose, setPurpose] = useState<'hire' | 'work'>('hire'); // Mission (Hire vs Work)
  const [myIdentity, setMyIdentity] = useState<'personal' | 'business'>('personal'); // Identity (Self Card)
  
  const [matchedUser, setMatchedUser] = useState<any | null>(null);
  const [expandedItem, setExpandedItem] = useState<any | null>(null);

  // ELITE LOGIC: Discovery Target is driven by the Mission (Purpose)
  // Hire/Buy -> Discover People (Talent)
  // Work/Sell -> Discover Organizations (Companies)
  const discoveryMode = useMemo(() => 
    purpose === 'hire' ? 'people' : 'organizations'
  , [purpose]);

  const handleCenterPair = () => {
    if (feedRef.current) feedRef.current.swipeRight();
  };

  return (
    <div className={`${jakarta.className} min-h-screen bg-[#F8FBFC] text-[#0D1B2A] flex flex-col overflow-hidden relative`}>
      
      {/* 1. BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#0EA5A5]/5 blur-[80px] md:blur-[120px]" />
        <motion.div animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-[#FF7A00]/5 blur-[80px] md:blur-[120px]" />
      </div>

      {/* 2. TOP HEADER */}
      <header className="relative z-50 px-4 md:px-6 py-4 bg-white/60 backdrop-blur-xl border-b border-[#E1E8ED] flex flex-col items-center shadow-sm">
        <div className="w-full max-w-7xl flex justify-between items-center text-[#0D1B2A]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 transition-transform hover:scale-105 cursor-pointer">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-md border-2 border-white transition-all ${myIdentity === 'personal' ? 'bg-[#0EA5A5] z-10 scale-110' : 'bg-slate-200 opacity-50'}`}><User size={12} className="text-white" /></div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-md border-2 border-white transition-all ${myIdentity === 'business' ? 'bg-[#FF7A00] z-10 scale-110' : 'bg-slate-200 opacity-50'}`}><Building2 size={12} className="text-white" /></div>
            </div>
            <span className="font-[800] tracking-tighter text-lg md:text-xl italic uppercase">ParaPair</span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => router.push('/pricing')} className="p-2 text-[#FF7A00] hover:scale-110 transition-transform"><Crown size={22} fill="currentColor" /></button>
            <button onClick={() => router.push('/feed')} className="p-2.5 bg-[#F0F4F8] rounded-full text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Search size={20}/></button>
            <button className="p-2.5 bg-[#F0F4F8] rounded-full text-slate-400"><Bell size={20}/></button>
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT (Responsive Fluid Grid) */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6 pt-6 md:pt-8 pb-32 overflow-hidden gap-10">
        
        {/* LEFT SIDEBAR: Desktop Intelligence */}
        <aside className="hidden xl:flex w-72 flex-col gap-6">
          <div className="space-y-3">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2 italic">Current Mission</p>
             <PurposeToggle purpose={purpose} onChange={setPurpose} />
          </div>

          <div className="bg-white/50 backdrop-blur-md border border-white rounded-[32px] p-6 shadow-sm mt-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0EA5A5] mb-6 flex items-center gap-2"><TrendingUp size={14} /> Trending Now</h3>
            <ul className="space-y-4">
              {['AI Architects ↑', 'Next.js 14 ↑', 'SaaS Design ↑'].map((item, i) => (
                <li key={`trend-${i}`} className="text-[11px] font-bold text-slate-600 flex items-center justify-between group cursor-pointer hover:text-[#0EA5A5] transition-colors">{item} <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" /></li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CENTER HUB */}
        <main className="flex-1 flex flex-col items-center justify-start relative w-full overflow-y-auto no-scrollbar">
          
          {/* MOBILE MISSION SWITCHER */}
          <div className="xl:hidden w-full max-w-[280px] mb-8 shrink-0 flex flex-col items-center">
             <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3 italic text-center">Active Mission</p>
             <PurposeToggle purpose={purpose} onChange={setPurpose} />
          </div>

          {/* IDENTITY SWITCHER (Manual Selection) */}
          <div className="flex bg-[#F0F4F8] p-1 rounded-2xl border border-[#E1E8ED] mb-8 shadow-inner w-full max-w-[360px] md:max-w-md shrink-0">
            <button 
              onClick={() => setMyIdentity('personal')}
              className={`flex-1 py-2.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${myIdentity === 'personal' ? 'bg-[#0EA5A5] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
            >
              As Individual
            </button>
            <button 
              onClick={() => setMyIdentity('business')}
              className={`flex-1 py-2.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${myIdentity === 'business' ? 'bg-[#FF7A00] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
            >
              As Business
            </button>
          </div>

          {/* THE DECK */}
          <div className="relative group w-full max-w-[360px] md:max-w-[380px] shrink-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 scale-95 bg-white/30 rounded-[42px] border border-white/40 -z-10 blur-[1px] hidden md:block" />
            <Suspense fallback={null}>
              <SwipeFeed 
                ref={feedRef}
                mode={discoveryMode} 
                myIdentity={myIdentity}
                key={`${myIdentity}-${discoveryMode}`} // Refreshes when either role or mission changes
                onMatch={(data: any) => setMatchedUser(data)} 
                onExpand={(item: any) => setExpandedItem(item)}
              />
            </Suspense>
          </div>

          {/* SMART ACTION TRAY */}
          <div className="flex items-center gap-4 mt-12 bg-white/60 backdrop-blur-xl p-2 rounded-3xl border border-white shadow-xl shadow-slate-200/50 shrink-0 mb-10">
             <button key="act-save" className="p-3 text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Bookmark size={20}/></button>
             <div className="w-[1px] h-6 bg-slate-200" />
             <button key="act-pair" onClick={handleCenterPair} className="p-3 text-[#FF7A00] hover:scale-125 active:scale-90 animate-pulse transition-all"><Zap size={20} fill="currentColor" /></button>
             <div className="w-[1px] h-6 bg-slate-200" />
             <button key="act-expand" onClick={() => setExpandedItem(null)} className="p-3 text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Eye size={20}/></button>
             <div className="w-[1px] h-6 bg-slate-200" />
             <button key="act-share" className="p-3 text-slate-400 hover:text-[#0EA5A5] transition-all hover:scale-110 active:scale-90"><Share2 size={20}/></button>
          </div>
        </main>

        {/* RIGHT SIDEBAR: Velocity */}
        <aside className="hidden xl:flex w-72 flex-col gap-6">
          <div className="flex-1 bg-white/50 backdrop-blur-md border border-white rounded-[40px] p-6 shadow-sm flex flex-col text-[#0D1B2A]">
            <div className="mb-8 text-center"><h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 flex items-center justify-center gap-2"><Activity size={14} className="text-[#FF7A00]" /> Forge Pulse</h3></div>
            <div className="space-y-8">
               {[{u:'AI/LLM',a:'+142%'},{u:'SaaS UX',a:'+85%'}].map((item,i) => (
                 <div key={`vel-item-${i}`} className="px-2">
                   <div className="flex justify-between items-center mb-1.5"><span className="text-[11px] font-bold text-slate-600">{item.u}</span><span className="text-[10px] font-black italic text-[#FF7A00]">{item.a}</span></div>
                   <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><motion.div initial={{width:0}} animate={{width:item.a.replace('+','')}} transition={{duration:1.5,delay:i*0.2}} className="h-full bg-[#FF7A00] opacity-60" /></div>
                 </div>
               ))}
            </div>
          </div>
        </aside>
      </div>

      {/* 4. UNIVERSAL GLASS DOCK */}
      <nav className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-8 md:gap-12 min-w-[340px] justify-center transition-all">
        <button key="nav-f" onClick={() => router.push('/feed')} className="text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Search size={22} strokeWidth={3} /></button>
        <button key="nav-p" onClick={() => router.push('/pairs')} className="text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Users size={22} strokeWidth={2.5} /></button>
        <div className="relative group">
          <div className={`absolute inset-0 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ${myIdentity === 'personal' ? 'bg-[#0EA5A5]/30' : 'bg-[#FF7A00]/30'}`} />
          <button key="nav-spark" onClick={handleCenterPair} className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all active:scale-75 hover:scale-110 hover:rotate-12 ${myIdentity === 'personal' ? 'bg-[#0EA5A5] shadow-[#0EA5A5]/40' : 'bg-[#FF7A00] shadow-[#FF7A00]/40'} border-[6px] border-white`} >
            <Sparkles size={24} fill="currentColor" />
          </button>
        </div>
        <button key="nav-m" onClick={() => router.push('/messages')} className="text-slate-400 hover:text-[#FF7A00] active:scale-90 transition-all"><MessageCircle size={22} strokeWidth={2.5} /></button>
        <button key="nav-d" onClick={() => router.push('/dashboard')} className="text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><UserCircle size={22} strokeWidth={2.5} /></button>
      </nav>

      <AnimatePresence>
        {matchedUser && <MatchOverlay key="match-overlay" matchData={matchedUser} onClose={() => setMatchedUser(null)} />}
        {expandedItem && <CardDetailsSheet key="details-sheet" item={expandedItem} onClose={() => setExpandedItem(null)} onPair={() => feedRef.current?.swipeRight()} myIdentity={myIdentity} />}
      </AnimatePresence>
    </div>
  );
}