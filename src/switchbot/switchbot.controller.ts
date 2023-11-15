import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwitchbotService } from './switchbot.service';
import { CreateSwitchbotDto } from './dto/create-switchbot.dto';
import { UpdateSwitchbotDto } from './dto/update-switchbot.dto';

@Controller('switchbot')
export class SwitchbotController {
  constructor(private readonly switchbotService: SwitchbotService) {}

  @Post()
  create(@Body() createSwitchbotDto: CreateSwitchbotDto) {
    return this.switchbotService.create(createSwitchbotDto);
  }

  @Get()
  findAll() {
    return this.switchbotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.switchbotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwitchbotDto: UpdateSwitchbotDto) {
    return this.switchbotService.update(+id, updateSwitchbotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.switchbotService.remove(+id);
  }

  @Post(':deviceId/send-command')
  sendCommand(@Param('deviceId') deviceId: string, @Body() body: { command: string, parameter?: string }) {
    const { command, parameter } = body;
    return this.switchbotService.sendSwitchbotCommand(deviceId, command, parameter);
  }

  @Get(':deviceId/get-state')
  getState(@Param('deviceId') deviceId: string) {
    return this.switchbotService.getSwitchbotState(deviceId);
  }
}
