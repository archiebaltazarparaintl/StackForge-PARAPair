/* eslint-disable @typescript-eslint/no-unsafe-call */

// app/api/user/interests/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { JwtPayload } from 'jsonwebtoken';

import { verifyAccessToken } from '@repo/shared/auth';
import { PrismaClient } from '../../../../../../packages/db/generated/client';

const prisma = new PrismaClient();

interface AuthUser extends JwtPayload {
  id: string;
  email?: string;
}

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
    const user = (await verifyAccessToken(
      req.headers.get('authorization')?.replace('Bearer ', ''),
    )) as AuthUser | null;

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

    const userId = user.id;

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
          userId,
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
            userId,
            interestId: interest.id,
          },
        });
      }

      // MARK PROFILE COMPLETE
      await tx.user.update({
        where: {
          id: userId,
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
