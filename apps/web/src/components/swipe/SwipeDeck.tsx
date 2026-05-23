 
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/immutability */
'use client';

import TinderCard from 'react-tinder-card';
import { useEffect, useState } from 'react';
import axios from 'axios';

type UserCard = {
  id: string;
  fullname: string;
  bio?: string;
  profileImageUrl?: string;
};

export default function SwipeDeck() {
  const [users, setUsers] = useState<UserCard[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await axios.get('/api/discovery');
    setUsers(res.data);
  }

  async function swipe(direction: 'left' | 'right', user: UserCard) {
    await axios.post('/api/swipe', {
      senderId: 'CURRENT_USER_ID', // replace with auth later
      receiverId: user.id,
      type: direction === 'right' ? 'RIGHT' : 'LEFT',
    });
  }

  return (
    <div className="flex justify-center items-center w-full h-[85vh] px-4">
      <div className="relative w-full max-w-sm sm:max-w-md">
        {users.map((user) => (
          <TinderCard
            key={user.id}
            onSwipe={(dir) => swipe(dir as 'left' | 'right', user)}
            preventSwipe={['up', 'down']}
          >
            <div
              className="absolute w-full bg-white rounded-2xl shadow-xl overflow-hidden
              h-[70vh] sm:h-[75vh] flex flex-col"
            >
              <img
                src={user.profileImageUrl || '/default.jpg'}
                className="w-full h-[60%] object-cover"
              />

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-bold">{user.fullname}</h2>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {user.bio || 'No bio yet'}
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}