import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { DispositivosModule } from './modules/modules/dispositivos/dispositivos.module';
import { SwitchbotModule } from './switchbot/switchbot.module';
import { HttpModule } from '@nestjs/axios';
import { SalonesModule } from './modules/modules/salones/salones.module';



@Module({
  imports: [UserModule, DispositivosModule, SwitchbotModule, HttpModule, SalonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
