'use client';

import SwipeFeed from '@/features/marketplace/SwipeFeed';

export default function PublicMarketplacePage() {
  return (
    <div className="min-h-screen bg-[#FFFDFC] flex flex-col items-center justify-center p-6">
      
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black">
          PARA
          <span className="text-[#FF7A00]">
            PAIR
          </span>
        </h1>

        <p className="mt-4 text-slate-500">
          Discover professionals before creating an account.
        </p>
      </div>

      <SwipeFeed
        mode="people"
        isGuest
        onMatch={() => {}}
      />
    </div>
  );
}