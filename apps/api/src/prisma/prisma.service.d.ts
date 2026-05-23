import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../database/generated/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
