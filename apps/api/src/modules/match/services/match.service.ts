import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RealtimeGateway } from '../../realtime/realtime.gateway';

@Injectable()
export class MatchService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly realtime: RealtimeGateway,
  ) {}

  async checkAndCreateMatch(userAId: string, userBId: string) {
    // Normalize IDs
    const [userOneId, userTwoId] = [userAId, userBId].sort();

    // Check existing match
    const existingMatch = await this.prisma.match.findUnique({
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
      this.prisma.swipe.findFirst({
        where: {
          senderId: userAId,
          receiverId: userBId,
          type: 'RIGHT',
        },
      }),

      this.prisma.swipe.findFirst({
        where: {
          senderId: userBId,
          receiverId: userAId,
          type: 'RIGHT',
        },
      }),
    ]);

    // No mutual match
    if (!aSwiped || !bSwiped) {
      return null;
    }

    // Create match
    const match = await this.prisma.match.create({
      data: {
        userOneId,
        userTwoId,
      },
    });

    // Auto create conversation
    const conversation = await this.prisma.conversation.create({
      data: {
        matchId: match.id,
      },
    });

    // Realtime emit
    this.realtime.emitMatch(userAId, {
      matchId: match.id,
      conversationId: conversation.id,
      matchedUserId: userBId,
    });

    this.realtime.emitMatch(userBId, {
      matchId: match.id,
      conversationId: conversation.id,
      matchedUserId: userAId,
    });

    console.log('🔥 MATCH CREATED:', match.id);

    return match;
  }
}
