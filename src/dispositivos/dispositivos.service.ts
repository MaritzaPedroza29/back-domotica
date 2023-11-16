import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { get } from 'http';

const prisma = new PrismaClient();

const data = [];

@Injectable()
export class DispositivosService {
  async create(createDispositivoDto: CreateDispositivoDto) {
    const newDispositivo = await prisma.dispositivos.create({
      data: createDispositivoDto,
    });
    return newDispositivo;
  }

  async findAll(): Promise<any[]> {
    const alldevice = await prisma.dispositivos.findMany();
    return alldevice;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispositivo`;
  }

  async update(id: string, updateDispositivoDto: UpdateDispositivoDto) {
    const { nombre_dispositivo, salonesIdsalon } = updateDispositivoDto;
  
    const updateDispositivo = await prisma.dispositivos.update({
      where: {
        iddispositivo: id,
      },
      data: {
        nombre_dispositivo: nombre_dispositivo || undefined, // Actualiza el nombre si se proporciona, de lo contrario, no cambia el nombre
        salonesIdsalon: salonesIdsalon || undefined, // Actualiza el correo si se proporciona, de lo contrario, no cambia el correo
      },
    });
  
    return updateDispositivo;
  }

  async remove(id: string) {
    const dispositivo = await prisma.dispositivos.delete({
      where: { iddispositivo: id },
    })
    return dispositivo;
  }

  getdeviceid(deviceIds: string[]){
    let enchufle = '';
    let medidor = '';
    for (let i = 0; i < deviceIds.length; i++) {
       enchufle = deviceIds[1];
       medidor = deviceIds[2];
    }
    this.getenchufle(enchufle);
    this.getmedidor(medidor);
  }

  async getenchufle(idenchfle: string) {
    try {
      const response = await axios.get(`http://localhost:8000/dispositivo/${idenchfle}`);
      data.push("vatios:"+response.data.body.weight);
    } catch (err) {
      console.error(err);
    }
  }

  async getmedidor(idmedidor: string) {
    try {
      const response = await axios.get(`http://localhost:8000/dispositivo/${idmedidor}`);
      data.push("temperatura:"+response.data.body.temperature);
    } catch (err) {
      console.error(err);
    }
  }

  async commandenchufle(idmedidor: string, comando: string) {
    try {
      const response = await axios.post(`http://localhost:8000/comandodispositivo/${idmedidor}/${comando}`);
      return response.data;
    } catch (err){
      console.error(err);
    }
  }

  async getdatadevice(): Promise<any[]>{
   return data;
  }
}
