'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { sendSwipe, getSwipeFeed } from '../../../../features/swipe/swipe.api';

type UserCard = {
  id: string;
  name: string;
  bio?: string;
  image?: string;
};

export default function SwipePage() {
  const router = useRouter();
  const [users, setUsers] = useState<UserCard[]>([]);
  const [index, setIndex] = useState(0);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getSwipeFeed();
    setUsers(data);
  };

  const currentUser = users[index];

  const handleSwipe = async (direction: 'LEFT' | 'RIGHT') => {
    if (!currentUser) return;

    await sendSwipe(currentUser.id, direction);

    const next = index + 1;
    setIndex(next);

    x.set(0);

    if (next >= users.length) {
      router.push('/dashboard/personal');
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#FFFDFC] relative overflow-hidden">

      {/* CARD */}
      <motion.div
        drag="x"
        style={{ x, rotate }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 120) handleSwipe('RIGHT');
          else if (info.offset.x < -120) handleSwipe('LEFT');
        }}
        className="w-[360px] h-[520px] bg-white rounded-3xl shadow-xl border flex flex-col items-center justify-center p-6"
      >
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />

        <h2 className="text-xl font-bold">{currentUser.name}</h2>
        <p className="text-sm text-gray-500 mt-2 text-center">
          {currentUser.bio}
        </p>

        <div className="mt-10 flex gap-4">
          <button
            onClick={() => handleSwipe('LEFT')}
            className="px-6 py-2 rounded-xl bg-gray-200"
          >
            Skip
          </button>

          <button
            onClick={() => handleSwipe('RIGHT')}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white"
          >
            Like
          </button>
        </div>
      </motion.div>
    </div>
  );
}