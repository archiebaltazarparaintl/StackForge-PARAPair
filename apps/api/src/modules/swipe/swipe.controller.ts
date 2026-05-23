/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { SwipeService } from './swipe.service';

@Controller('swipe')
export class SwipeController {
  constructor(private readonly swipeService: SwipeService) {}

  @Get('feed')
  async getFeed(@Req() req: any) {
    return this.swipeService.getFeed(req.user.id);
  }

  @Post()
  async swipe(
    @Req() req: any,
    @Body()
    body: {
      receiverId: string;
      type: 'LEFT' | 'RIGHT';
    },
  ) {
    return this.swipeService.swipe(req.user.id, body.receiverId, body.type);
  }
}
