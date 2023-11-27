import { UserService } from 'src/modules/services/user/user.service';
import { LoginDto } from './dto/login.dt';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
}
