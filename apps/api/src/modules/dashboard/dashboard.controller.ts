/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Req } from '@nestjs/common';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('admin/stats')
  getAdminStats() {
    return this.dashboardService.getAdminStats();
  }

  @Get('business/stats')
  getBusinessStats(@Req() req: any) {
    return this.dashboardService.getBusinessStats(req.user.id);
  }

  @Get('personal/stats')
  getPersonalStats(@Req() req: any) {
    return this.dashboardService.getPersonalStats(req.user.id);
  }
}
