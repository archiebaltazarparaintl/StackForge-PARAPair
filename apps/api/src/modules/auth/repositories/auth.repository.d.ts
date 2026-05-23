import { PrismaService } from '../../../prisma/prisma.service';
export declare class AuthRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        fullname: string;
        username: string;
        email: string;
        birthDate: Date;
        id: string;
        passwordHash: string;
        isVerified: boolean;
        otpHash: string | null;
        otpExpiresAt: Date | null;
        currentMode: import("../../../../../../database/generated/client").$Enums.AccountType;
        isActive: boolean;
        isBanned: boolean;
        profileCompleted: boolean;
        role: import("../../../../../../database/generated/client").$Enums.UserRole;
        isOnline: boolean;
        lastSeenAt: Date | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null>;
    findByUsername(username: string): Promise<{
        fullname: string;
        username: string;
        email: string;
        birthDate: Date;
        id: string;
        passwordHash: string;
        isVerified: boolean;
        otpHash: string | null;
        otpExpiresAt: Date | null;
        currentMode: import("../../../../../../database/generated/client").$Enums.AccountType;
        isActive: boolean;
        isBanned: boolean;
        profileCompleted: boolean;
        role: import("../../../../../../database/generated/client").$Enums.UserRole;
        isOnline: boolean;
        lastSeenAt: Date | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null>;
    createUser(data: {
        fullname: string;
        username: string;
        email: string;
        passwordHash: string;
        birthDate: Date;
    }): Promise<{
        fullname: string;
        username: string;
        email: string;
        birthDate: Date;
        id: string;
        passwordHash: string;
        isVerified: boolean;
        otpHash: string | null;
        otpExpiresAt: Date | null;
        currentMode: import("../../../../../../database/generated/client").$Enums.AccountType;
        isActive: boolean;
        isBanned: boolean;
        profileCompleted: boolean;
        role: import("../../../../../../database/generated/client").$Enums.UserRole;
        isOnline: boolean;
        lastSeenAt: Date | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    createOtp(data: {
        email: string;
        otpHash: string;
        expiresAt: Date;
    }): Promise<{
        email: string;
        id: string;
        otpHash: string;
        createdAt: Date;
        verified: boolean;
        expiresAt: Date;
    }>;
    findOtpByEmail(email: string): Promise<{
        email: string;
        id: string;
        otpHash: string;
        createdAt: Date;
        verified: boolean;
        expiresAt: Date;
    } | null>;
    markOtpVerified(email: string): Promise<import("../../../../../../database/generated/client").Prisma.BatchPayload>;
    findVerifiedOtp(email: string): Promise<{
        email: string;
        id: string;
        otpHash: string;
        createdAt: Date;
        verified: boolean;
        expiresAt: Date;
    } | null>;
    deleteOtpByEmail(email: string): Promise<import("../../../../../../database/generated/client").Prisma.BatchPayload>;
}
