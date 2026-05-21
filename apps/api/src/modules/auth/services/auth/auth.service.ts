import { BadRequestException, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { RegisterDto } from '../../dto/register.dto';
import { AuthRepository } from '../../repositories/auth.repository';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(private readonly authRepository: AuthRepository) {}

  async register(dto: RegisterDto) {
    const existingEmail = await this.authRepository.findByEmail(dto.email);

    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }

    const existingUsername = await this.authRepository.findByUsername(
      dto.username,
    );

    if (existingUsername) {
      throw new BadRequestException('Username already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.authRepository.createUser({
      fullname: dto.fullname,
      username: dto.username,
      email: dto.email,
      passwordHash,
      birthDate: new Date(dto.birthDate),
    });

    return {
      success: true,
      message: 'Account created successfully',
      userId: user.id,
    };
  }
}
