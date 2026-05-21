/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { PrismaClient } from '@prisma/client';
import { RealtimeGateway } from '../realtime/realtime.gateway';

const prisma = new PrismaClient();

export class MatchService {
  constructor(private realtime?: RealtimeGateway) {}

  async checkAndCreateMatch(userAId: string, userBId: string) {
    // Normalize IDs to avoid duplicate match combinations
    const [userOneId, userTwoId] = [userAId, userBId].sort();

    // Check existing match
    const existingMatch = await prisma.match.findUnique({
      where: {
        userOneId_userTwoId: {
          userOneId,
          userTwoId,
        },
      },
    });

    if (existingMatch) {
      return existingMatch;
    }

    // Check mutual RIGHT swipes
    const [aSwiped, bSwiped] = await Promise.all([
      prisma.swipe.findFirst({
        where: {
          senderId: userAId,
          receiverId: userBId,
          type: 'RIGHT',
        },
      }),

      prisma.swipe.findFirst({
        where: {
          senderId: userBId,
          receiverId: userAId,
          type: 'RIGHT',
        },
      }),
    ]);

    // No mutual match yet
    if (!aSwiped || !bSwiped) {
      return null;
    }

    // Create match
    const match = await prisma.match.create({
      data: {
        userOneId,
        userTwoId,
      },
    });

    // Auto create conversation
    await prisma.conversation.create({
      data: {
        matchId: match.id,
      },
    });

    // Real-time match event
    this.realtime?.emitToUser(userAId, 'match', {
      matchId: match.id,
      matchedUserId: userBId,
    });

    this.realtime?.emitToUser(userBId, 'match', {
      matchId: match.id,
      matchedUserId: userAId,
    });

    console.log('🔥 MATCH CREATED:', match.id);

    return match;
  }
}
