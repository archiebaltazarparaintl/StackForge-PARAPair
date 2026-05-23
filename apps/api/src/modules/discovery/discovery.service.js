"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryService = void 0;
const client_1 = require("../../../../../database/generated/client");
const client_2 = require("../../../../../database/generated/client");
const prisma = new client_1.PrismaClient();
class DiscoveryService {
    async getFeed(userId, limit = 20) {
        const currentUser = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                personalProfile: true,
                businessProfile: true,
            },
        });
        if (!currentUser)
            throw new Error('User not found');
        const swipes = await prisma.swipe.findMany({
            where: { senderId: userId },
            select: { receiverId: true },
        });
        const swipedIds = new Set(swipes.map((s) => s.receiverId));
        const candidates = await prisma.user.findMany({
            where: {
                id: {
                    notIn: [userId, ...swipedIds],
                },
                isActive: true,
                isBanned: false,
            },
            include: {
                personalProfile: true,
                businessProfile: {
                    include: {
                        services: true,
                    },
                },
            },
            take: 100,
        });
        const scored = candidates.map((user) => {
            let score = 0;
            if (currentUser.currentMode === client_2.AccountType.PERSONAL) {
                if (user.businessProfile)
                    score += 30;
                if (user.personalProfile)
                    score += 10;
            }
            if (currentUser.currentMode === client_2.AccountType.BUSINESS) {
                if (user.personalProfile)
                    score += 30;
                if (user.businessProfile)
                    score += 10;
            }
            if (user.personalProfile) {
                score += user.personalProfile.skills?.length || 0;
            }
            if (user.businessProfile) {
                score += user.businessProfile.services?.length || 0;
            }
            if (user.lastLoginAt) {
                const hoursAgo = (Date.now() - new Date(user.lastLoginAt).getTime()) /
                    (1000 * 60 * 60);
                if (hoursAgo < 24)
                    score += 20;
                else if (hoursAgo < 72)
                    score += 10;
            }
            return { user, score };
        });
        const sorted = scored
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map((item) => item.user);
        return sorted;
    }
}
exports.DiscoveryService = DiscoveryService;
//# sourceMappingURL=discovery.service.js.map