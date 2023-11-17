import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalonesService } from '../../services/salones/salones.service';
import { CreateSaloneDto } from '../../dto/dtosalones/create-salone.dto';
import { UpdateSaloneDto } from '../../dto/dtosalones/update-salone.dto';

@Controller('salones')
export class SalonesController {
  constructor(private readonly salonesService: SalonesService) {}

  @Post()
  create(@Body() createSaloneDto: CreateSaloneDto) {
    return this.salonesService.create(createSaloneDto);
  }

  @Get()
  findAll() {
    return this.salonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salonesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSaloneDto: UpdateSaloneDto) {
    return this.salonesService.update(id, updateSaloneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salonesService.remove(id);
  }
}
