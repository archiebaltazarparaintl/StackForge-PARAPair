import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = [
      {
        id: '1',
        name: 'Sophia',
        age: 22,
        bio: 'Coffee lover & UI/UX Designer',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },

      {
        id: '2',
        name: 'Daniel',
        age: 25,
        bio: 'Startup founder 🚀',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },

      {
        id: '3',
        name: 'Angela',
        age: 21,
        bio: 'Music & travel addict ✨',
        image:
          'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
      },
    ];

    return NextResponse.json(users);
  } catch (error) {
    console.error('[SWIPE_GET]', error);

    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      {
        status: 500,
      },
    );
  }
}