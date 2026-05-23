import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SwipeModule } from './modules/swipe/swipe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AuthModule,
    PrismaModule,
    DashboardModule,
    SwipeModule,
  ],
})
export class AppModule {}
