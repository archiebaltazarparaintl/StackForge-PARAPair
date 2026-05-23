import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@repo/db/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  [x: string]: any;
  async onModuleInit() {
    await this.$connect();
  }
}
