import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';

@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) {}

  @Post()
  create(@Body() createDispositivoDto: CreateDispositivoDto) {
    return this.dispositivosService.create(createDispositivoDto);
  }

  @Get("/datadevice")
  async getdatadevice(): Promise<any[]> {
    await this.dispositivosService.getdatadevice();
    return this.dispositivosService.getdatadevice();
  }
  @Post("/comando/:id/:comando")
   comando(@Param('id') id: string, @Param('comando')comando: string){
    return this.dispositivosService.commandenchufle(id, comando);
  }

  @Get()
  async findAll() {
    const dispositivos = await this.dispositivosService.findAll();
    const iddispositivo = dispositivos.map(dispositivo => dispositivo.iddispositivo);
    this.getState(iddispositivo);
    return dispositivos
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispositivosService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDispositivoDto: UpdateDispositivoDto) {
    return this.dispositivosService.update(id, updateDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispositivosService.remove(id);
  }

  getState(@Param('deviceId') deviceId: string[]) {
    return this.dispositivosService.getdeviceid(deviceId);
  }
}
