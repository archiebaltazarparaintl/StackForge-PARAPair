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
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  /**
   * userId -> socketIds
   *
   * Support multiple devices/tabs
   */
  private userSockets = new Map<string, Set<string>>();

  /**
   * socketId -> userId
   */
  private socketUsers = new Map<string, string>();

  // =========================================
  // CONNECTION
  // =========================================

  handleConnection(client: Socket) {
    console.log('✅ Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('❌ Client disconnected:', client.id);

    const userId = this.socketUsers.get(client.id);

    if (!userId) return;

    const sockets = this.userSockets.get(userId);

    if (sockets) {
      sockets.delete(client.id);

      // Remove user entirely if no sockets remain
      if (sockets.size === 0) {
        this.userSockets.delete(userId);

        // Broadcast offline status
        this.server.emit('user_offline', {
          userId,
        });
      }
    }

    this.socketUsers.delete(client.id);
  }

  // =========================================
  // REGISTER USER
  // =========================================

  /**
   * Frontend:
   *
   * socket.emit('register', {
   *   userId: 'user-123',
   * });
   */
  @SubscribeMessage('register')
  handleRegister(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      userId: string;
    },
  ) {
    const { userId } = payload;

    // Add socket to user
    if (!this.userSockets.has(userId)) {
      this.userSockets.set(userId, new Set());
    }

    this.userSockets.get(userId)?.add(client.id);

    // Reverse mapping
    this.socketUsers.set(client.id, userId);

    // Join personal room
    client.join(`user:${userId}`);

    // Broadcast online status
    this.server.emit('user_online', {
      userId,
    });

    console.log(`🔥 Registered ${userId} -> ${client.id}`);

    return {
      success: true,
      socketId: client.id,
    };
  }

  // =========================================
  // JOIN CONVERSATION ROOM
  // =========================================

  /**
   * Frontend:
   *
   * socket.emit('join_conversation', {
   *   conversationId: 'abc123',
   * });
   */
  @SubscribeMessage('join_conversation')
  handleJoinConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      conversationId: string;
    },
  ) {
    const room = `conversation:${payload.conversationId}`;

    client.join(room);

    return {
      success: true,
      room,
    };
  }

  // =========================================
  // LEAVE CONVERSATION
  // =========================================

  @SubscribeMessage('leave_conversation')
  handleLeaveConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      conversationId: string;
    },
  ) {
    const room = `conversation:${payload.conversationId}`;

    client.leave(room);

    return {
      success: true,
    };
  }

  // =========================================
  // SEND MESSAGE
  // =========================================

  /**
   * Frontend:
   *
   * socket.emit('send_message', {
   *   conversationId: 'conv-1',
   *   senderId: '1',
   *   receiverId: '2',
   *   message: 'Hello',
   * });
   */
  @SubscribeMessage('send_message')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      conversationId: string;
      senderId: string;
      receiverId: string;
      message: string;
    },
  ) {
    const chatPayload = {
      ...payload,
      timestamp: new Date(),
    };

    // Emit to conversation room
    this.server
      .to(`conversation:${payload.conversationId}`)
      .emit('receive_message', chatPayload);

    // ACK to sender
    client.emit('message_sent', chatPayload);

    return {
      success: true,
    };
  }

  // =========================================
  // TYPING INDICATOR
  // =========================================

  @SubscribeMessage('typing')
  handleTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      conversationId: string;
      userId: string;
    },
  ) {
    client
      .to(`conversation:${payload.conversationId}`)
      .emit('user_typing', payload);
  }

  @SubscribeMessage('stop_typing')
  handleStopTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: {
      conversationId: string;
      userId: string;
    },
  ) {
    client
      .to(`conversation:${payload.conversationId}`)
      .emit('user_stop_typing', payload);
  }

  // =========================================
  // MATCH EVENT
  // =========================================

  emitMatch(userId: string, payload: any) {
    this.server.to(`user:${userId}`).emit('match', payload);
  }

  // =========================================
  // GENERIC USER EMITTER
  // =========================================

  emitToUser(userId: string, event: string, payload: any) {
    this.server.to(`user:${userId}`).emit(event, payload);
  }

  // =========================================
  // ROOM EMITTER
  // =========================================

  emitToConversation(conversationId: string, event: string, payload: any) {
    this.server.to(`conversation:${conversationId}`).emit(event, payload);
  }

  // =========================================
  // ONLINE CHECK
  // =========================================

  isUserOnline(userId: string) {
    return this.userSockets.has(userId);
  }
}
