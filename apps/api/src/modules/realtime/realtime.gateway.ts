import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  /**
   * userId -> socketId
   */
  private userSockets = new Map<string, string>();

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);

    for (const [userId, socketId] of this.userSockets.entries()) {
      if (socketId === client.id) {
        this.userSockets.delete(userId);
        break;
      }
    }
  }

  /**
   * Register user socket
   * Frontend:
   * socket.emit('register', 'user-123');
   */
  @SubscribeMessage('register')
  handleRegister(
    @ConnectedSocket() client: Socket,
    @MessageBody() userId: string,
  ) {
    this.userSockets.set(userId, client.id);

    return {
      success: true,
      socketId: client.id,
    };
  }

  /**
   * Send message
   * Frontend:
   * socket.emit('send_message', {
   *   senderId: '1',
   *   receiverId: '2',
   *   message: 'Hello',
   * });
   */
  @SubscribeMessage('send_message')
  handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      senderId: string;
      receiverId: string;
      message: string;
    },
  ) {
    const { senderId, receiverId, message } = payload;

    const receiverSocketId = this.userSockets.get(receiverId);

    const chatPayload = {
      senderId,
      receiverId,
      message,
      timestamp: new Date(),
    };

    // Emit to receiver
    if (receiverSocketId) {
      this.server.to(receiverSocketId).emit('receive_message', chatPayload);
    }

    // Emit back to sender
    client.emit('message_sent', chatPayload);

    return {
      success: true,
    };
  }

  /**
   * Utility method
   */
  emitToUser(userId: string, event: string, payload: any) {
    const socketId = this.userSockets.get(userId);

    if (!socketId) return;

    this.server.to(socketId).emit(event, payload);
  }
}
