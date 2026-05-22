/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// app/api/user/interests/route.ts

import { NextRequest, NextResponse } from 'next/server';

import { getUserFromCookie } from '../../../../../web/features/lib/auth';
import { PrismaClient } from '../../../../../../database/generated/client';

const prisma = new PrismaClient();

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromCookie();

    if (!user?.id) {
      return NextResponse.json(
        {
          message: 'Unauthorized',
        },
        {
          status: 401,
        },
      );
    }

    const body: unknown = await req.json();

    if (typeof body !== 'object' || body === null || !('interests' in body)) {
      return NextResponse.json(
        {
          message: 'Invalid payload',
        },
        {
          status: 400,
        },
      );
    }

    const rawInterests = (body as { interests?: unknown }).interests;

    if (!Array.isArray(rawInterests)) {
      return NextResponse.json(
        {
          message: 'Interests must be an array',
        },
        {
          status: 400,
        },
      );
    }

    // CLEAN + DEDUPE
    const interests = [
      ...new Set(
        rawInterests
          .filter((item): item is string => typeof item === 'string')
          .map((item) => item.trim())
          .filter(Boolean),
      ),
    ];

    // OPTIONAL LIMIT
    if (interests.length > 25) {
      return NextResponse.json(
        {
          message: 'Maximum of 25 interests allowed',
        },
        {
          status: 400,
        },
      );
    }

    await prisma.$transaction(async (tx) => {
      // REMOVE EXISTING RELATIONS
      await tx.userInterest.deleteMany({
        where: {
          userId: user.id,
        },
      });

      for (const item of interests) {
        const slug = slugify(item);

        const interest = await tx.interest.upsert({
          where: {
            slug,
          },

          update: {},

          create: {
            name: item,
            slug,
          },
        });

        await tx.userInterest.create({
          data: {
            userId: user.id,
            interestId: interest.id,
          },
        });
      }

      // MARK PROFILE COMPLETE
      await tx.user.update({
        where: {
          id: user.id,
        },

        data: {
          profileCompleted: true,
        },
      });
    });

    return NextResponse.json({
      success: true,
      interests,
    });
  } catch (error) {
    console.error('[USER_INTERESTS_POST]', error);

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
