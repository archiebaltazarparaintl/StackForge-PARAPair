import { Module } from '@nestjs/common';
import { ChatGateway } from '../realtime/realtime.gateway';

@Module({
  providers: [ChatGateway],
})
export class ChatModule {}
