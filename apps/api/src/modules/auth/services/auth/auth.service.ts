import { BadRequestException, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { RegisterDto } from '../../dto/register.dto';
import { VerifyOtpDto } from '../../dto/verify-otp.dto';

import { AuthRepository } from '../../repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  // =========================================
  // GENERATE OTP
  // =========================================
  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // =========================================
  // SEND OTP
  // =========================================
  async sendOtp(email: string) {
    const otp = this.generateOtp();

    const otpHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date(Date.now() + 1000 * 60 * 5); // 5 mins

    // REMOVE OLD OTPs
    await this.authRepository.deleteOtpByEmail(email);

    // STORE NEW OTP
    await this.authRepository.createOtp({
      email,
      otpHash,
      expiresAt,
    });

    // TODO:
    // SEND EMAIL USING NODEMAILER

    console.log('OTP:', otp);

    return {
      success: true,
      message: 'OTP sent successfully',
    };
  }

  // =========================================
  // VERIFY OTP
  // =========================================
  async verifyOtp(dto: VerifyOtpDto) {
    const otpRecord = await this.authRepository.findOtpByEmail(dto.email);

    if (!otpRecord) {
      throw new BadRequestException('OTP not found');
    }

    // EXPIRED
    if (new Date() > otpRecord.expiresAt) {
      throw new BadRequestException('OTP expired');
    }

    const isMatch = await bcrypt.compare(dto.otpCode, otpRecord.otpHash);

    if (!isMatch) {
      throw new BadRequestException('Invalid OTP');
    }

    await this.authRepository.markOtpVerified(dto.email);

    return {
      success: true,
      message: 'OTP verified',
    };
  }

  // =========================================
  // REGISTER
  // =========================================
  async register(dto: RegisterDto) {
    // CHECK VERIFIED OTP
    const verifiedOtp = await this.authRepository.findVerifiedOtp(dto.email);

    if (!verifiedOtp) {
      throw new BadRequestException('Email is not verified');
    }

    // CHECK OTP EXPIRATION
    if (new Date() > verifiedOtp.expiresAt) {
      throw new BadRequestException('OTP expired');
    }

    // EXISTING EMAIL
    const existingEmail = await this.authRepository.findByEmail(dto.email);

    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }

    // EXISTING USERNAME
    const existingUsername = await this.authRepository.findByUsername(
      dto.username,
    );

    if (existingUsername) {
      throw new BadRequestException('Username already exists');
    }

    // HASH PASSWORD
    const passwordHash = await bcrypt.hash(dto.password, 12);

    // CREATE USER
    const user = await this.authRepository.createUser({
      fullname: dto.fullname,
      username: dto.username,
      email: dto.email,
      passwordHash,
      birthDate: new Date(dto.birthDate),
    });

    // CLEANUP OTP
    await this.authRepository.deleteOtpByEmail(dto.email);

    return {
      success: true,
      message: 'Account created successfully',
      userId: user.id,
    };
  }
}
