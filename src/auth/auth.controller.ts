import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dt';

@Controller('auth')
export class AuthController {
    constructor (
        private readonly authService : AuthService,
    ){}

    @Post('login')
    Login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
