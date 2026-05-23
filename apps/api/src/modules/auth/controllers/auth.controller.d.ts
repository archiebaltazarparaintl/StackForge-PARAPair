import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { VerifyOtpDto } from '../dto/verify-otp.dto';
import { AuthService } from '../services/auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendOtp(body: {
        email: string;
    }): any;
    register(dto: RegisterDto): Promise<any>;
    verifyOtp(dto: VerifyOtpDto): any;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            fullname: string;
            username: string;
            email: string;
        };
    }>;
    getMe(user: any): any;
    getProfile(user: any): any;
}
