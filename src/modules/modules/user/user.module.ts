import { Module } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserController } from '../../controllers/users/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
