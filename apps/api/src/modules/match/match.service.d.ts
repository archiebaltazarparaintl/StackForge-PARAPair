import { RealtimeGateway } from '../realtime/realtime.gateway';
export declare class MatchService {
    private realtime?;
    constructor(realtime?: RealtimeGateway | undefined);
    checkAndCreateMatch(userAId: string, userBId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userOneId: string;
        userTwoId: string;
        status: import("../../../../../database/generated/client").$Enums.MatchStatus;
    } | null>;
}
