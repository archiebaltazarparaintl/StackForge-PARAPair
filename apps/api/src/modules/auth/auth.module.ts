import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';

import { AuthService } from './services/auth/auth.service';

import { AuthRepository } from './repositories/auth.repository';

import { MailService } from '../../common/mail/mail.service';

import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,

      signOptions: {
        expiresIn: '7d',
      },
    }),
    PrismaModule,
  ],

  controllers: [AuthController],

  providers: [AuthService, AuthRepository, MailService],
})
export class AuthModule {}
