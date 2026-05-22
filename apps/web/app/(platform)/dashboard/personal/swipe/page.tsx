'use client';

import SwipeDeck from '../../../../../components/swipe/SwipeDeck';

export default function SwipePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Discover
        </h1>

        <SwipeDeck />
      </div>
    </div>
  );
}

