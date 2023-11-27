import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dt';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    Login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(): string;
}
