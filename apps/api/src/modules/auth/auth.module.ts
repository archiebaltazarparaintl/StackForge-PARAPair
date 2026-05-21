import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';

import { AuthService } from './services/auth/auth.service';

import { AuthRepository } from './repositories/auth.repository';

import { PrismaService } from '../../prisma/prisma.service';

import { MailService } from '../../common/mail/mail.service';

@Module({
  controllers: [AuthController],

  providers: [AuthService, AuthRepository, PrismaService, MailService],
})
export class AuthModule {}
