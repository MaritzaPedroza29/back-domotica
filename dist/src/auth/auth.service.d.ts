import { UserService } from 'src/modules/services/user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    login(): string;
}
