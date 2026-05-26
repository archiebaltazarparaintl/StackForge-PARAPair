import { Controller, Get, Query } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';

@Controller('discovery')
export class DiscoveryController {
  constructor(private readonly service: DiscoveryService) {}

  @Get()
  async feed(@Query('userId') userId: string) {
    return this.service.getFeed(userId);
  }
}
