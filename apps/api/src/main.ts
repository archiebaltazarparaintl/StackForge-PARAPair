/* eslint-disable @typescript-eslint/no-floating-promises */
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '../../.env',
  });

  await app.listen(3001);
}

bootstrap();
