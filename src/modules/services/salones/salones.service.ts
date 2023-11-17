import { Injectable } from '@nestjs/common';
import { CreateSaloneDto } from '../../dto/dtosalones/create-salone.dto';
import { UpdateSaloneDto } from '../../dto/dtosalones/update-salone.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SalonesService {
  async create(createSaloneDto: CreateSaloneDto) {
    const newSalones = await prisma.salones.create({
      data: createSaloneDto,
    });
    return newSalones;
  }

  async findAll(): Promise<any[]> {
    const allsalones = await prisma.salones.findMany();
    return allsalones;
  }

  findOne(id: number) {
    return `This action returns a #${id} salone`;
  }

  async update(id: number, updateSaloneDto: UpdateSaloneDto) {
    const { idsalon, nombre_salon } = updateSaloneDto;
  
    const updateSalon = await prisma.salones.update({
      where: {
        idsalon: id,
      },
      data: {
        nombre_salon: nombre_salon || undefined, // Actualiza el nombre si se proporciona, de lo contrario, no cambia el nombre
      },
    });
  
    return updateSalon;
  }

  async remove(id: number) {
    const salon = await prisma.salones.delete({
      where: { idsalon: id },
    })
    return salon;
  }
}
