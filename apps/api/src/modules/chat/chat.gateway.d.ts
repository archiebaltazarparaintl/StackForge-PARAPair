import { Server, Socket } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    joinConversation(client: Socket, conversationId: string): Promise<{
        joined: boolean;
        conversationId: string;
    }>;
    sendMessage(client: Socket, body: {
        conversationId: string;
        senderId: string;
        content: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        senderId: string;
        type: import("../../../../../database/generated/client").$Enums.MessageType;
        content: string | null;
        seenAt: Date | null;
        conversationId: string;
    }>;
}
