/* eslint-disable @typescript-eslint/require-await */
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

// import { PrismaService } from '../../../../prisma/prisma.service';
// import { LoginDto } from '../../dto/login.dto';

// @Injectable()
// export class AuthService {
//   [x: string]: any;
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async login(dto: LoginDto) {
//     const user = await this.prisma.user.findUnique({
//       where: {
//         username: dto.username,
//       },
//     });

//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     const passwordMatch = await bcrypt.compare(dto.password, user.passwordHash);

//     if (!passwordMatch) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     const payload = {
//       sub: user.id,
//       username: user.username,
//     };

//     return {
//       access_token: await this.jwtService.signAsync(payload),

//       user: {
//         id: user.id,
//         fullname: user.fullname,
//         username: user.username,
//         email: user.email,
//       },
//     };
//   }
// }

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../../../prisma/prisma.service';

import { LoginDto } from '../../dto/login.dto';
import { RegisterDto } from '../../dto/register.dto';
import { VerifyOtpDto } from '../../dto/verify-otp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async sendOtp(email: string) {
    return {
      success: true,
      email,
      message: 'OTP sent',
    };
  }

  async register(dto: RegisterDto) {
    return {
      success: true,
      dto,
    };
  }

  async verifyOtp(dto: VerifyOtpDto) {
    return {
      success: true,
      dto,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.passwordHash);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),

      user: {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
      },
    };
  }
}
