/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Post, Body } from '@nestjs/common';
import { SwipeService } from './swipe.service';

@Controller('swipe')
export class SwipeController {
  constructor(private readonly swipeService: SwipeService) {}

  @Post()
  async swipeUser(
    @Body()
    body: {
      senderId: string;
      receiverId: string;
      type: 'LEFT' | 'RIGHT';
    },
  ) {
    return this.swipeService.swipe(body);
  }
}
