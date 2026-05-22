/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Post } from '@nestjs/common';

import { ProfileService } from './profile.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('interests')
  async saveInterests(
    @CurrentUser() user: any,
    @Body() body: { interests: string[] },
  ) {
    await this.profileService.saveInterests(user.id, body.interests);

    return {
      success: true,
    };
  }
}
