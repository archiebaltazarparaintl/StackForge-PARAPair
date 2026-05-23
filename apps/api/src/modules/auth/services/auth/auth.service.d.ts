import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../../prisma/prisma.service';
import { LoginDto } from '../../dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    [x: string]: any;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            fullname: string;
            username: string;
            email: string;
        };
    }>;
}
