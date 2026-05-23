/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export class MatchService {
  constructor(private realtime: RealtimeGateway) {}

  async checkAndCreateMatch(userAId: string, userBId: string) {
    const [userOneId, userTwoId] = [userAId, userBId].sort();

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

    if (!aSwiped || !bSwiped) {
      return null;
    }

    const match = await prisma.match.create({
      data: {
        userOneId,
        userTwoId,
      },
    });

    const conversation = await prisma.conversation.create({
      data: {
        matchId: match.id,
      },
    });

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

    return match;
  }
}