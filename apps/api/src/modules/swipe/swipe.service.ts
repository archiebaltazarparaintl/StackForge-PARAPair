import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SwipeService {
  constructor(private readonly prisma: PrismaService) {}

  async getFeed(userId: string) {
    const swipedUsers = await this.prisma.swipe.findMany({
      where: {
        senderId: userId,
      },
      select: {
        receiverId: true,
      },
    });

    const excludedIds = swipedUsers.map((s) => s.receiverId);

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          notIn: [...excludedIds, userId],
        },

        deletedAt: null,
        isActive: true,
        isBanned: false,

        personalProfile: {
          isNot: null,
        },
      },

      include: {
        personalProfile: true,
        media: {
          where: {
            type: 'IMAGE',
          },
          take: 1,
        },
      },

      take: 30,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return users;
  }

  async swipe(senderId: string, receiverId: string, type: 'LEFT' | 'RIGHT') {
    await this.prisma.swipe.upsert({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },

      update: {
        type,
      },

      create: {
        senderId,
        receiverId,
        type,
      },
    });

    if (type === 'LEFT') {
      return {
        matched: false,
      };
    }

    const reverseSwipe = await this.prisma.swipe.findFirst({
      where: {
        senderId: receiverId,
        receiverId: senderId,
        type: 'RIGHT',
      },
    });

    if (!reverseSwipe) {
      return {
        matched: false,
      };
    }

    const sortedUsers = [senderId, receiverId].sort();

    const match = await this.prisma.match.upsert({
      where: {
        userOneId_userTwoId: {
          userOneId: sortedUsers[0],
          userTwoId: sortedUsers[1],
        },
      },

      update: {},

      create: {
        userOneId: sortedUsers[0],
        userTwoId: sortedUsers[1],
      },
    });

    await this.prisma.conversation.upsert({
      where: {
        matchId: match.id,
      },

      update: {},

      create: {
        matchId: match.id,
      },
    });

    return {
      matched: true,
      match,
    };
  }
}
