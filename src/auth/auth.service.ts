import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/services/user/user.service';
import { LoginDto } from './dto/login.dt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor (
        private readonly userService : UserService
    ){}
    async login({email, password}: LoginDto){
        const users = await this.userService.findOneByEmail(email);
        if(!users){
            throw new UnauthorizedException('El correo electrónico es fuerte');
        }
        const isPasswordValid = await bcrypt.compare(password, users.clave)
        return 'login';
    }
}
