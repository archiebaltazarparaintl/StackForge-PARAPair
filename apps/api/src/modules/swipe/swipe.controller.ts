import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { SwipeService } from './swipe.service';

@Controller('swipe')
export class SwipeController {
  constructor(private readonly swipeService: SwipeService) {}

  @UseGuards(JwtAuthGuard)
  @Get('feed')
  async getFeed(@Req() req: any) {
    return this.swipeService.getFeed(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async swipe(
    @Req() req: any,

    @Body()
    body: {
      receiverId: string;
      type: 'LEFT' | 'RIGHT';
    },
  ) {
    return this.swipeService.swipe(req.user.userId, body.receiverId, body.type);
  }
}
