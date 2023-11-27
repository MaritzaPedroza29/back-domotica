import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/services/user/user.service';
import { LoginDto } from './dto/login.dt';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (
        private readonly userService : UserService,
        private readonly jwtService: JwtService
    ){}
    async login({email, password}: LoginDto){
        
        const user = await this.userService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException('El correo electrónico es incorrecto');
        }
        const isPasswordValid = await bcrypt.compare(password, user.clave)
        
        if(!isPasswordValid){
            throw new UnauthorizedException('la contraseña es incorrecta');
        }
        const payload = {email: user.correo};
        const token = await this.jwtService.signAsync(payload);
        return {
            token, 
            email
        }
    }
}
