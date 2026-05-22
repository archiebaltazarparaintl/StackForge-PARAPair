import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async saveInterests(userId: string, interests: string[]) {
    const cleanedInterests = [
      ...new Set(
        interests
          .filter((i) => typeof i === 'string')
          .map((i) => i.trim())
          .filter(Boolean),
      ),
    ];

    await this.prisma.$transaction(async (tx) => {
      await tx.userInterest.deleteMany({
        where: {
          userId,
        },
      });

      for (const interestName of cleanedInterests) {
        const slug = interestName.toLowerCase().replace(/\s+/g, '-');

        const interest = await tx.interest.upsert({
          where: {
            slug,
          },

          update: {},

          create: {
            name: interestName,
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

      await tx.user.update({
        where: {
          id: userId,
        },

        data: {
          profileCompleted: true,
        },
      });
    });
  }
}
