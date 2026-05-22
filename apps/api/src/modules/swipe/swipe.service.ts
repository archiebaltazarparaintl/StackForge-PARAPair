import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SwipeService {
  constructor(private prisma: PrismaService) {}

  async swipe({
    senderId,
    receiverId,
    type,
  }: {
    senderId: string;
    receiverId: string;
    type: 'LEFT' | 'RIGHT';
  }) {
    if (senderId === receiverId) {
      throw new BadRequestException('Cannot swipe yourself');
    }

    // upsert prevents duplicate swipe crash
    const swipe = await this.prisma.swipe.upsert({
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

    return swipe;
  }
}
