'use client';

import SwipeDeck from '../../../web/components/swipe/SwipeDeck';

export default function DiscoverPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 via-black to-black" />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 flex w-full flex-col items-center">
        {/* HEADER */}
        <div className="mb-6 flex w-full max-w-md items-center justify-between px-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Discover</h1>

            <p className="text-sm text-white/60">
              Find your perfect match ✨
            </p>
          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white backdrop-blur-xl transition hover:scale-105">
            🔥
          </button>
        </div>

        {/* SWIPE DECK */}
        <SwipeDeck />
      </div>
    </main>
  );
}