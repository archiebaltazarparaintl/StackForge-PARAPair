import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';

import { MailService } from './common/mail/mail.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [MailService],
})
export class AppModule {}
