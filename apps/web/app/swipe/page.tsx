/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SwipeFeed from '@/components/marketplace/SwipeFeed';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export default function SwipePreviewPage() {
  const router = useRouter();
  const [swipeCount, setSwipeCount] = useState(0);
  const [myRole, setMyRole] = useState<'personal' | 'business'>('personal');
  const [myInterests, setMyInterests] = useState<string[]>([]);
  const maxFreeSwipes = 5;

  useEffect(() => {
    // 1. Get Role
    const savedRole = localStorage.getItem('selected-role');
    if (savedRole === 'business' || savedRole === 'personal') setMyRole(savedRole);

    // 2. Get Interests
    const savedInterests = localStorage.getItem('user-interests');
    if (savedInterests) {
      try {
        setMyInterests(JSON.parse(savedInterests));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        console.error("Failed to parse interests");
      }
    }
  }, []);

  const discoveryMode = myRole === 'business' ? 'people' : 'organizations';

  const handleSwipeDetection = () => {
    const nextCount = swipeCount + 1;
    setSwipeCount(nextCount);
    if (nextCount >= maxFreeSwipes) {
      setTimeout(() => router.push('/match-results'), 800);
    }
  };

  return (
    <div className={`${jakarta.className} min-h-screen bg-[#F8FBFC] overflow-hidden flex flex-col items-center relative text-[#0D1B2A]`}>
      
      {/* 1. PROGRESS */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-100 z-50">
        <motion.div 
          className={`h-full transition-colors duration-500 ${myRole === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}
          initial={{ width: "0%" }}
          animate={{ width: `${(swipeCount / maxFreeSwipes) * 100}%` }}
        />
      </div>

      {/* 2. HEADER */}
      <header className="py-12 text-center z-10 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E1E8ED] rounded-full shadow-sm mb-6">
          <Sparkles size={14} className="text-[#FF7A00] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
             Personalized for your interests
          </span>
        </div>

        <h1 className="text-4xl font-[900] italic uppercase tracking-tighter leading-none mb-4">
          Marketplace <span className={myRole === 'personal' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'}>Preview</span>
        </h1>
        
        {/* Chips to show what we are filtering by */}
        <div className="flex flex-wrap justify-center gap-2 max-w-sm mx-auto opacity-60">
           {myInterests.slice(0, 3).map(int => (
             <span key={int} className="text-[8px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">
               {int}
             </span>
           ))}
           {myInterests.length > 3 && <span className="text-[8px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">+{myInterests.length - 3} More</span>}
        </div>
      </header>

      {/* 3. THE DYNAMIC FEED */}
      <main className="flex-1 flex items-center justify-center w-full pb-32">
        <SwipeFeed 
          mode={discoveryMode} 
          myIdentity={myRole}
          interestFilter={myInterests} // PASSING THE INTERESTS
          onMatch={handleSwipeDetection} 
          key={`${myRole}-${myInterests.length}`}
        />
      </main>

      {/* 4. BACKGROUND DECORATIVE */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0EA5A5]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF7A00]/5 blur-[120px]" />
      </div>
    </div>
  );
}