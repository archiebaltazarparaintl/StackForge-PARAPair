"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const client_1 = require("../../../../../database/generated/client");
const prisma = new client_1.PrismaClient();
class MatchService {
    realtime;
    constructor(realtime) {
        this.realtime = realtime;
    }
    async checkAndCreateMatch(userAId, userBId) {
        const [userOneId, userTwoId] = [userAId, userBId].sort();
        const existingMatch = await prisma.match.findUnique({
            where: {
                userOneId_userTwoId: {
                    userOneId,
                    userTwoId,
                },
            },
        });
        if (existingMatch) {
            return existingMatch;
        }
        const [aSwiped, bSwiped] = await Promise.all([
            prisma.swipe.findFirst({
                where: {
                    senderId: userAId,
                    receiverId: userBId,
                    type: 'RIGHT',
                },
            }),
            prisma.swipe.findFirst({
                where: {
                    senderId: userBId,
                    receiverId: userAId,
                    type: 'RIGHT',
                },
            }),
        ]);
        if (!aSwiped || !bSwiped) {
            return null;
        }
        const match = await prisma.match.create({
            data: {
                userOneId,
                userTwoId,
            },
        });
        await prisma.conversation.create({
            data: {
                matchId: match.id,
            },
        });
        this.realtime?.emitToUser(userAId, 'match', {
            matchId: match.id,
            matchedUserId: userBId,
        });
        this.realtime?.emitToUser(userBId, 'match', {
            matchId: match.id,
            matchedUserId: userAId,
        });
        console.log('🔥 MATCH CREATED:', match.id);
        return match;
    }
}
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map