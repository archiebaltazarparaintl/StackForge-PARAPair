/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/immutability */
'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Heart,
  X,
  MapPin,
  BriefcaseBusiness,
} from 'lucide-react';

type UserCard = {
  id: string;

  fullname: string;

  personalProfile: {
    bio: string | null;
    location: string | null;
    interests: string[];
    education: string | null;
  } | null;

  media: {
    url: string;
  }[];
};

export default function SwipePage() {
  const [users, setUsers] = useState<UserCard[]>([]);

  const [loading, setLoading] = useState(true);

  const [matchedUser, setMatchedUser] = useState<UserCard | null>(null);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swipe/feed`,
        {
          credentials: 'include',
        },
      );

      const data = await res.json();

      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSwipe = async (
    receiverId: string,
    type: 'LEFT' | 'RIGHT',
  ) => {
    const currentUser = users[0];

    setUsers((prev) => prev.slice(1));

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swipe`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          credentials: 'include',

          body: JSON.stringify({
            receiverId,
            type,
          }),
        },
      );

      const data = await res.json();

      if (data.matched) {
        setMatchedUser(currentUser);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const current = users[0];

  return (
    <div className="min-h-screen bg-[#FFFDFC] flex items-center justify-center px-4 py-10 overflow-hidden">

      {/* MATCH MODAL */}
      <AnimatePresence>
        {matchedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
              }}
              className="bg-white rounded-[40px] p-8 max-w-sm w-full text-center"
            >
              <h2 className="text-4xl font-black bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-transparent bg-clip-text">
                IT'S A MATCH!
              </h2>

              <div className="mt-6 flex justify-center">
                <div className="relative">
                  <Image
                    src={
                      matchedUser.media?.[0]?.url ||
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                    }
                    alt="match"
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-32 h-32 border-4 border-[#FFB547]"
                  />

                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white">
                    <Heart fill="white" />
                  </div>
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {matchedUser.fullname}
              </h3>

              <p className="text-gray-500 mt-2">
                You both liked each other.
              </p>

              <button
                onClick={() => setMatchedUser(null)}
                className="mt-6 h-12 w-full rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white font-semibold"
              >
                Continue Swiping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOADING */}
      {loading && (
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FFB547] border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-500">
            Loading profiles...
          </p>
        </div>
      )}

      {/* EMPTY */}
      {!loading && users.length === 0 && (
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            No more profiles
          </h2>

          <p className="text-gray-500 mt-2">
            Come back later for more matches.
          </p>
        </div>
      )}

      {/* CARD */}
      {!loading && current && (
        <div className="w-full max-w-md">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: -200,
              }}
              transition={{
                duration: 0.35,
              }}
              className="bg-white rounded-[38px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-[#F1F1F1]"
            >

              {/* IMAGE */}
              <div className="relative h-[520px]">

                <Image
                  src={
                    current.media?.[0]?.url ||
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                  }
                  alt={current.fullname}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-4xl font-bold">
                    {current.fullname}
                  </h2>

                  {current.personalProfile?.location && (
                    <div className="flex items-center gap-2 mt-2 text-white/90">
                      <MapPin size={18} />

                      <span>
                        {current.personalProfile.location}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {current.personalProfile?.bio && (
                  <p className="text-gray-700 leading-relaxed">
                    {current.personalProfile.bio}
                  </p>
                )}

                {current.personalProfile?.education && (
                  <div className="mt-4 flex items-center gap-2 text-gray-600">
                    <BriefcaseBusiness size={18} />

                    <span>
                      {current.personalProfile.education}
                    </span>
                  </div>
                )}

                {/* INTERESTS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.personalProfile?.interests?.map(
                    (interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 rounded-full bg-[#FFF1E4] text-[#FF7A00] text-sm font-semibold"
                      >
                        {interest}
                      </span>
                    ),
                  )}
                </div>

                {/* ACTIONS */}
                <div className="mt-8 flex items-center justify-center gap-5">

                  <button
                    onClick={() =>
                      handleSwipe(current.id, 'LEFT')
                    }
                    className="w-16 h-16 rounded-full bg-white border border-[#EAEAEA] shadow-lg flex items-center justify-center"
                  >
                    <X
                      size={28}
                      className="text-[#FF4D6D]"
                    />
                  </button>

                  <button
                    onClick={() =>
                      handleSwipe(current.id, 'RIGHT')
                    }
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] shadow-2xl flex items-center justify-center"
                  >
                    <Heart
                      size={34}
                      fill="white"
                      className="text-white"
                    />
                  </button>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}

