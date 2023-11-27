import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
