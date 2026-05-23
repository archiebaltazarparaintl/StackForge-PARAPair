/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@repo/shared';
import { AccountType } from '../../../../../database/generated/client';

const prisma = new PrismaClient();

export class DiscoveryService {
  async getFeed(userId: string, limit = 20) {
    // 1. Get current user
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        personalProfile: true,
        businessProfile: true,
      },
    });

    if (!currentUser) throw new Error('User not found');

    // 2. Get already swiped users
    const swipes = await prisma.swipe.findMany({
      where: { senderId: userId },
      select: { receiverId: true },
    });

    const swipedIds = new Set(swipes.map((s) => s.receiverId));

    // 3. Build base filter
    const candidates = await prisma.user.findMany({
      where: {
        id: {
          notIn: [userId, ...swipedIds],
        },
        isActive: true,
        isBanned: false,
      },
      include: {
        personalProfile: true,
        businessProfile: {
          include: {
            services: true,
          },
        },
      },
      take: 100, // prefetch pool
    });

    // 4. SCORING ENGINE (CORE LOGIC)
    const scored = candidates.map((user) => {
      let score = 0;

      // A. Mode compatibility (VERY IMPORTANT)
      if (currentUser.currentMode === AccountType.PERSONAL) {
        if (user.businessProfile) score += 30;
        if (user.personalProfile) score += 10;
      }

      if (currentUser.currentMode === AccountType.BUSINESS) {
        if (user.personalProfile) score += 30;
        if (user.businessProfile) score += 10;
      }

      // B. Profile completeness boost
      if (user.personalProfile) {
        score += user.personalProfile.skills?.length || 0;
      }

      if (user.businessProfile) {
        score += user.businessProfile.services?.length || 0;
      }

      // C. Activity boost
      if (user.lastLoginAt) {
        const hoursAgo =
          (Date.now() - new Date(user.lastLoginAt).getTime()) /
          (1000 * 60 * 60);

        if (hoursAgo < 24) score += 20;
        else if (hoursAgo < 72) score += 10;
      }

      return { user, score };
    });

    // 5. SORT BY SCORE
    const sorted = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((item) => item.user);

    return sorted;
  }
}
