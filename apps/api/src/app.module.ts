import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscoveryModule } from './modules/discovery/discovery.module';
import { RealtimeGateway } from './modules/realtime/realtime.gateway';
import { MatchService } from './modules/match/match.service';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [DiscoveryModule, ChatModule],
  controllers: [AppController],
  providers: [AppService, RealtimeGateway, MatchService],
})
export class AppModule {}
