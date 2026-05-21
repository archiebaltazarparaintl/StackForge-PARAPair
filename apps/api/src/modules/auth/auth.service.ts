/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';

import { LoginDto } from '../auth/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,

    private readonly jwtService: JwtService,
  ) {}

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
