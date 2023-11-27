import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor (
        private readonly authService : AuthService,
    ){}

    @Post('login')
    Login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(){
    return 'profile';
    }
}
