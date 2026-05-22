/* eslint-disable react-hooks/immutability */
'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Heart,
  X,
  MapPin,
  BriefcaseBusiness,
} from 'lucide-react';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

type SwipeUser = {
  id: string;
  fullname: string;
  bio: string;
  location: string;
  profileImage: string;
  interests: string[];
  skills: string[];
};

export default function SwipePage() {
  const [users, setUsers] = useState<SwipeUser[]>([]);

  const [loading, setLoading] = useState(true);

  const [matched, setMatched] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch('/api/swipe');

      const data = await res.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSwipe(
    receiverId: string,
    type: 'LEFT' | 'RIGHT',
  ) {
    try {
      const res = await fetch('/api/swipe', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          receiverId,
          type,
        }),
      });

      const data = await res.json();

      if (data.matched) {
        setMatched(true);

        setTimeout(() => {
          setMatched(false);
        }, 2500);
      }

      setUsers((prev) =>
        prev.filter((u) => u.id !== receiverId),
      );
    } catch (error) {
      console.log(error);
    }
  }

  const currentUser = users[0];

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#FFFDFC] relative overflow-hidden`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#FFF1E4]" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[#FFE7C7]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171717]">
            Discover
          </h1>

          <p className="mt-2 text-[#5F6368]">
            Swipe and connect with professionals
          </p>
        </div>

        {/* MATCH POPUP */}
        <AnimatePresence>
          {matched && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              className="absolute top-10 z-50 bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white px-8 py-4 rounded-full font-bold shadow-2xl"
            >
              🎉 It&rsquo;s a Match!
            </motion.div>
          )}
        </AnimatePresence>

        {/* LOADING */}
        {loading && (
          <div className="text-[#5F6368]">
            Loading profiles...
          </div>
        )}

        {/* EMPTY */}
        {!loading && users.length === 0 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              No more profiles
            </h2>

            <p className="mt-2 text-[#5F6368]">
              Come back later for more people.
            </p>
          </div>
        )}

        {/* CARD */}
        <AnimatePresence mode="wait">
          {currentUser && (
            <motion.div
              key={currentUser.id}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -120,
                rotate: -12,
              }}
              transition={{
                duration: 0.35,
              }}
              className="w-full max-w-sm sm:max-w-md"
            >
              <div className="bg-white rounded-[36px] overflow-hidden border border-[#F3F3F3] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                
                {/* IMAGE */}
                <div className="relative h-[500px] bg-[#F7F7F7]">
                  <img
                    src={
                      currentUser.profileImage ||
                      'https://placehold.co/600x800'
                    }
                    alt={currentUser.fullname}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-3xl font-bold text-white">
                      {currentUser.fullname}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-white/90 text-sm">
                      <MapPin size={16} />
                      {currentUser.location || 'Unknown'}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  
                  {/* BIO */}
                  <p className="text-[#5F6368] leading-relaxed">
                    {currentUser.bio ||
                      'No bio available'}
                  </p>

                  {/* SKILLS */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BriefcaseBusiness
                        size={18}
                      />

                      <span className="font-semibold">
                        Skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentUser.skills?.map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-[#FFF1E4] text-[#FF7A00] text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* INTERESTS */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {currentUser.interests?.map(
                      (interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 rounded-full border border-[#ECECEC] text-sm"
                        >
                          {interest}
                        </span>
                      ),
                    )}
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-8 flex items-center justify-center gap-6">
                    
                    {/* DISLIKE */}
                    <button
                      onClick={() =>
                        handleSwipe(
                          currentUser.id,
                          'LEFT',
                        )
                      }
                      className="w-16 h-16 rounded-full bg-white border border-[#ECECEC] shadow-lg flex items-center justify-center hover:scale-105 transition-all"
                    >
                      <X
                        size={28}
                        className="text-[#FF4D4F]"
                      />
                    </button>

                    {/* LIKE */}
                    <button
                      onClick={() =>
                        handleSwipe(
                          currentUser.id,
                          'RIGHT',
                        )
                      }
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] shadow-2xl flex items-center justify-center hover:scale-105 transition-all"
                    >
                      <Heart
                        size={34}
                        className="text-white"
                        fill="white"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}