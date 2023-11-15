import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DispositivosService {
  create(createDispositivoDto: CreateDispositivoDto) {
    return 'This action adds a new dispositivo';
  }

  async findAll(): Promise<any[]> {
    const alldevice = await prisma.dispositivos.findMany();
    return alldevice;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispositivo`;
  }

  update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    return `This action updates a #${id} dispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispositivo`;
  }
}
