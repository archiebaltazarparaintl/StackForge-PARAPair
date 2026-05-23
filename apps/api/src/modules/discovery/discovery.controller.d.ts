import { DiscoveryService } from './discovery.service';
export declare class DiscoveryController {
    private readonly service;
    constructor(service: DiscoveryService);
    feed(userId: string): Promise<({
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
        businessProfile: ({
            services: {
                id: string;
                createdAt: Date;
                businessId: string;
                serviceId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            location: string | null;
            businessName: string;
            industry: string;
            description: string | null;
            websiteUrl: string | null;
            businessEmail: string | null;
            phoneNumber: string | null;
            teamSize: number | null;
            lookingFor: string[];
            logoUrl: string | null;
            businessCardUrl: string;
        }) | null;
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
}
