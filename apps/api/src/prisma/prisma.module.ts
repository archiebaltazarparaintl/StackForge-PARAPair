import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DiscoveryModule } from '../modules/discovery/discovery.module';
import { RealtimeGateway } from '../modules/realtime/realtime.gateway';
import { MatchService } from '../modules/match/match.service';
import { ChatModule } from '../modules/chat/chat.module';

@Global()
@Module({
  imports: [DiscoveryModule, ChatModule],
  providers: [RealtimeGateway, MatchService, PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
