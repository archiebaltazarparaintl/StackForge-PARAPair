/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { PrismaClient } from '@repo/db/generated/client';

const prisma = new PrismaClient();

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server!: Server;

  // JOIN CONVERSATION ROOM
  @SubscribeMessage('joinConversation')
  async joinConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody() conversationId: string,
  ) {
    await client.join(conversationId);

    return {
      joined: true,
      conversationId,
    };
  }

  // SEND MESSAGE
  @SubscribeMessage('sendMessage')
  async sendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    body: {
      conversationId: string;
      senderId: string;
      content: string;
    },
  ) {
    const message = await prisma.message.create({
      data: {
        conversationId: body.conversationId,
        senderId: body.senderId,
        content: body.content,
        type: 'TEXT',
      },
    });

    // BROADCAST TO ROOM
    this.server.to(body.conversationId).emit('newMessage', message);

    return message;
  }
}
