import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from '../../dto/dtodispositivos/create-dispositivo.dto';
import { UpdateDispositivoDto } from '../../dto/dtodispositivos/update-dispositivo.dto';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { get } from 'http';

const prisma = new PrismaClient();

const data = [];



@Injectable()
export class DispositivosService {
  private estaPrendido: boolean = false;
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
    let enchuflepuerta = '';
    for (let i = 0; i < deviceIds.length; i++) {
        enchuflepuerta = deviceIds[1];
       enchufle = deviceIds[2];
       medidor = deviceIds[3];
    }
    this.getenchufle(enchufle);
    this.getmedidor(medidor);
    this.getenchuflepuerta(enchuflepuerta);
    this.obtenerEstado();
  }

  async getenchufle(idenchfle: string) {
    try {
      const response = await axios.get(`http://localhost:8000/dispositivo/${idenchfle}`);
      
      // Obtener el último objeto en el array o un objeto vacío si no hay objetos
      const lastDataItem = data[data.length - 1] || {};
      
      // Actualizar las propiedades con los nuevos datos
      lastDataItem['vatios'] = response.data.body.weight + "W";
      lastDataItem['power'] = response.data.body.power
  
      // Si no hay objetos en el array, agregar el nuevo objeto
      if (data.length === 0) {
        data.push(lastDataItem);
      }
    } catch (err) {
      console.error(err);
    }
  }
  async getenchuflepuerta(idenchflepuerta: string) {
    try {
      const response = await axios.get(`http://localhost:8000/dispositivo/${idenchflepuerta}`);
      
      // Obtener el último objeto en el array o un objeto vacío si no hay objetos
      const lastDataItem = data[data.length - 1] || {};
      
      // Actualizar las propiedades con los nuevos datos
      //lastDataItem['vatios'] = response.data.body.weight + "W";
      lastDataItem['power_puerta'] = response.data.body.power
  
      // Si no hay objetos en el array, agregar el nuevo objeto
      if (data.length === 0) {
        data.push(lastDataItem);
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  async getmedidor(idmedidor: string) {
    try {
      const response = await axios.get(`http://localhost:8000/dispositivo/${idmedidor}`);
      
      // Obtener el último objeto en el array o un objeto vacío si no hay objetos
      const lastDataItem = data[data.length - 1] || {};
      
      // Actualizar las propiedades con los nuevos datos
      lastDataItem['temperatura'] = response.data.body.temperature + "°C";
  
      // Si no hay objetos en el array, agregar el nuevo objeto
      if (data.length === 0) {
        data.push(lastDataItem);
      }
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

  obtenerEstado(): boolean {
    const lastDataItem = data[data.length - 1] || {};
      
      // Actualizar las propiedades con los nuevos datos
      lastDataItem['estadoaire'] = this.estaPrendido;
  
      // Si no hay objetos en el array, agregar el nuevo objeto
      if (data.length === 0) {
        data.push(lastDataItem);
      }
    return this.estaPrendido;
  }
  
  async getdatadevice(): Promise<any[]>{
   return data;
  }

  async commandaire(idaire:string, comando:string): Promise<any[]>{
     const simulatedResponse = {
      data: {
      body: {
        items: [{ deviceID: idaire, message:"success", code:100 }],
      },
    },
    message: 'success',
    statusCode: 100,
  };
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Si el comando es para encender, actualiza el estado
  if (comando === 'turnOn'){
    this.estaPrendido = true;
  }

  // Si el comando es para apagar, actualiza el estado
  if (comando === 'turnOff'){
    this.estaPrendido = false;
  }

  return [simulatedResponse];
}
}
