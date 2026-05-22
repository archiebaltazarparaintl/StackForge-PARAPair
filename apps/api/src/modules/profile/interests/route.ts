/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextRequest, NextResponse } from 'next/server';

// import { Prisma } from '../../../../../../database/generated/client';
import { prisma } from '../../../../..';
import { getUserFromCookie } from '../../../../../web/features/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromCookie();

    if (!user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();

    // VALIDATE + SANITIZE
    const interests = Array.isArray(body.interests)
      ? [
          ...new Set(
            body.interests
              .filter((i: unknown): i is string => typeof i === 'string')
              .map((i: string) => i.trim())
              .filter(Boolean),
          ),
        ]
      : [];

    Prisma.$transaction(
      async (tx: {
        userInterest: {
          deleteMany: (arg0: { where: { userId: any } }) => any;
          create: (arg0: { data: { userId: any; interestId: any } }) => any;
        };
        interest: {
          upsert: (arg0: {
            where: { slug: any };
            update: {};
            create: { name: unknown; slug: any };
          }) => any;
        };
        user: {
          update: (arg0: {
            where: { id: any };
            data: { profileCompleted: boolean };
          }) => any;
        };
      }) => {
        // DELETE OLD INTERESTS
        await tx.userInterest.deleteMany({
          where: {
            userId: user.id,
          },
        });

        // CREATE/CONNECT INTERESTS
        for (const interestName of interests) {
          const interest = await tx.interest.upsert({
            where: {
              slug: interestName.toLowerCase().replace(/\s+/g, '-'),
            },

            update: {},

            create: {
              name: interestName,
              slug: interestName.toLowerCase().replace(/\s+/g, '-'),
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
      },
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      {
        status: 500,
      },
    );
  }
}
