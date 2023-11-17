import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { AppService } from '../../services/app/app.service';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { DispositivosModule } from '../dispositivos/dispositivos.module';
import { HttpModule } from '@nestjs/axios';
import { SalonesModule } from '../salones/salones.module';



@Module({
  imports: [UserModule, DispositivosModule, HttpModule, SalonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
