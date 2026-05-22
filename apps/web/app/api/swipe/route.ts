/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient, SwipeType } from '../../../../../database/generated/client';

import { getUserFromCookie } from '../../../../web/features/lib/auth';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const user: any = await getUserFromCookie();

    if (!user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    // GET ALREADY SWIPED USERS
    const swipedUsers = await prisma.swipe.findMany({
      where: {
        senderId: user.id,
      },

      select: {
        receiverId: true,
      },
    });

    const swipedIds = swipedUsers.map(
      (swipe) => swipe.receiverId,
    );

    // FEED
    const users = await prisma.user.findMany({
      where: {
        id: {
          notIn: [...swipedIds, user.id],
        },

        isActive: true,
        isBanned: false,

        deletedAt: null,

        currentMode: 'PERSONAL',

        profileCompleted: true,
      },

      take: 20,

      include: {
        personalProfile: true,

        interests: {
          include: {
            interest: true,
          },
        },

        skills: {
          include: {
            skill: true,
          },
        },

        media: true,
      },
    });

    const formattedUsers = users.map((u) => ({
      id: u.id,

      fullname: u.fullname,

      bio: u.personalProfile?.bio || '',

      location: u.personalProfile?.location || '',

      profileImage:
        u.personalProfile?.profileImageUrl ||
        u.media?.[0]?.url ||
        '',

      interests: u.interests.map(
        (interest) => interest.interest.name,
      ),

      skills: u.skills.map(
        (skill) => skill.skill.name,
      ),
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user: any = await getUserFromCookie();

    if (!user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const body = await req.json();

    const receiverId = body.receiverId;
    const type = body.type as SwipeType;

    if (!receiverId || !type) {
      return NextResponse.json(
        { message: 'Invalid payload' },
        { status: 400 },
      );
    }

    // CHECK DUPLICATE SWIPE
    const existingSwipe = await prisma.swipe.findUnique({
      where: {
        senderId_receiverId: {
          senderId: user.id,
          receiverId,
        },
      },
    });

    if (existingSwipe) {
      return NextResponse.json({
        success: false,
        message: 'Already swiped',
      });
    }

    // CREATE SWIPE
    await prisma.swipe.create({
      data: {
        senderId: user.id,
        receiverId,
        type,
      },
    });

    let matched = false;

    // MATCH SYSTEM
    if (type === SwipeType.RIGHT) {
      const reverseSwipe = await prisma.swipe.findFirst({
        where: {
          senderId: receiverId,
          receiverId: user.id,
          type: SwipeType.RIGHT,
        },
      });

      if (reverseSwipe) {
        matched = true;

        const userOneId =
          user.id < receiverId
            ? user.id
            : receiverId;

        const userTwoId =
          user.id < receiverId
            ? receiverId
            : user.id;

        const existingMatch =
          await prisma.match.findUnique({
            where: {
              userOneId_userTwoId: {
                userOneId,
                userTwoId,
              },
            },
          });

        if (!existingMatch) {
          await prisma.match.create({
            data: {
              userOneId,
              userTwoId,

              conversation: {
                create: {},
              },
            },
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      matched,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}