import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dt';
import { AuthGuard } from './auth.guard';


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
    profile(@Request() req) {
       return req.user; 
    }
}
