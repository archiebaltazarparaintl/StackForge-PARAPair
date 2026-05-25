'use client';

import { useRouter } from 'next/navigation';

import {
  Lock,
  MessageCircle,
  User,
  Heart,
} from 'lucide-react';

import SwipeFeed from '@/features/marketplace/SwipeFeed';

export default function PublicMarketplacePage() {
  const router = useRouter();

  const redirectToRegister = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC]">
      
      {/* TOP NAVBAR */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#ECECEC] px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          PARA
          <span className="text-[#FF7A00]">
            PAIR
          </span>
        </h1>

        <button
          onClick={redirectToRegister}
          className="bg-[#FF7A00] hover:bg-[#e86d00] text-white px-5 py-2 rounded-xl font-semibold transition"
        >
          Register
        </button>
      </div>

      {/* LOCKED NAVIGATION */}
      <div className="flex items-center justify-center gap-4 py-4 border-b border-[#F3F3F3] bg-white">

        <button
          onClick={redirectToRegister}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF1E4] text-[#FF7A00] font-medium"
        >
          <Lock size={18} />
          Explore
        </button>

        <button
          onClick={redirectToRegister}
          className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#F8F8F8]"
        >
          <Heart size={18} />
          Pair
        </button>

        <button
          onClick={redirectToRegister}
          className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#F8F8F8]"
        >
          <MessageCircle size={18} />
          Chat
        </button>

        <button
          onClick={redirectToRegister}
          className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#F8F8F8]"
        >
          <User size={18} />
          Profile
        </button>
      </div>

      {/* HERO */}
      <div className="text-center py-10 px-6">
        <h2 className="text-4xl font-bold text-[#171717]">
          Discover Professionals
        </h2>

        <p className="mt-4 text-[#5F6368] max-w-2xl mx-auto">
          Browse opportunities, founders, creatives, and collaborators.
          Create an account to unlock matching, chat, and networking features.
        </p>
      </div>

      {/* MARKETPLACE FEED */}
      <div className="px-4 pb-10">
        <SwipeFeed
  mode="people"
  onMatch={() => {}}
  isGuest={true}
/>
      </div>

      {/* CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={redirectToRegister}
          className="bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          Create Account to Unlock Features
        </button>
      </div>
    </div>
  );
}