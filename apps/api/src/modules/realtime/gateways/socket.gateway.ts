import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketGateway {
  @WebSocketServer()
  server!: Server;

  notifyUser(userId: string, payload: any) {
    this.server.to(userId).emit('notification', payload);
  }
}
