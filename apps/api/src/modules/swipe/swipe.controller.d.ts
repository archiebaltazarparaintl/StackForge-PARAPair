import { SwipeService } from './swipe.service';
export declare class SwipeController {
    private readonly swipeService;
    constructor(swipeService: SwipeService);
    getFeed(req: any): Promise<({
        personalProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            skills: string[];
            interests: string[];
            userId: string;
            gender: string | null;
            bio: string | null;
            location: string | null;
            education: string | null;
            experience: string | null;
            portfolioUrl: string | null;
            linkedinUrl: string | null;
            githubUrl: string | null;
            profileImageUrl: string | null;
            resumeUrl: string;
        } | null;
        media: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            type: import("../../../../../database/generated/client").$Enums.MediaType;
            userId: string;
            mimeType: string | null;
            size: number | null;
            isPrimary: boolean;
        }[];
    } & {
        fullname: string;
        username: string;
        email: string;
        birthDate: Date;
        id: string;
        passwordHash: string;
        isVerified: boolean;
        otpHash: string | null;
        otpExpiresAt: Date | null;
        currentMode: import("../../../../../database/generated/client").$Enums.AccountType;
        isActive: boolean;
        isBanned: boolean;
        profileCompleted: boolean;
        role: import("../../../../../database/generated/client").$Enums.UserRole;
        isOnline: boolean;
        lastSeenAt: Date | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
    swipe(req: any, body: {
        receiverId: string;
        type: 'LEFT' | 'RIGHT';
    }): Promise<{
        matched: boolean;
        match?: undefined;
    } | {
        matched: boolean;
        match: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userOneId: string;
            userTwoId: string;
            status: import("../../../../../database/generated/client").$Enums.MatchStatus;
        };
    }>;
}
