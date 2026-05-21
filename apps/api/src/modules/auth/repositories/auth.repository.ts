import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async createUser(data: {
    fullname: string;
    username: string;
    email: string;
    passwordHash: string;
    birthDate: Date;
  }) {
    return this.prisma.user.create({
      data,
    });
  }
  async createOtp(data: { email: string; otpHash: string; expiresAt: Date }) {
    return prisma.oTPVerification.create({
      data,
    });
  }

  async findOtpByEmail(email: string) {
    return prisma.oTPVerification.findFirst({
      where: { email },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async markOtpVerified(email: string) {
    return prisma.oTPVerification.updateMany({
      where: { email },
      data: {
        verified: true,
      },
    });
  }

  async findVerifiedOtp(email: string) {
    return prisma.oTPVerification.findFirst({
      where: {
        email,
        verified: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async deleteOtpByEmail(email: string) {
    return prisma.oTPVerification.deleteMany({
      where: { email },
    });
  }
}
