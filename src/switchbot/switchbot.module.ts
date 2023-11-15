import { Module } from '@nestjs/common';
import { SwitchbotService } from './switchbot.service';
import { SwitchbotController } from './switchbot.controller';
import { HttpModule } from '@nestjs/axios'; 

@Module({ 
  controllers: [SwitchbotController],
  providers: [SwitchbotService],
  imports: [HttpModule],
})
export class SwitchbotModule {}
