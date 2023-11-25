import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/dtouser/create-user.dto';
import { UpdateUserDto } from '../../dto/dtouser/update-user.dto';
import { PrismaClient, usuarios } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const { nombre, correo, clave, imagen } = createUserDto;
    const hashedPassword = this.hashPassword(clave);

    const newUser = await prisma.usuarios.create({
      data: {
        nombre,
        correo,
        clave: hashedPassword,
        imagen,
      },
    });

    return newUser;
  }

  async findAll(): Promise<any[]> {
    const allUsers = await prisma.usuarios.findMany();
    return allUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string){
    const user = await prisma.usuarios.findFirst({
      where: {
        correo: email,
      },
    })
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { nombre, correo } = updateUserDto;
  
    const updateUser = await prisma.usuarios.update({
      where: {
        idusuario: id,
      },
      data: {
        nombre: nombre || undefined, // Actualiza el nombre si se proporciona, de lo contrario, no cambia el nombre
        correo: correo || undefined, // Actualiza el correo si se proporciona, de lo contrario, no cambia el correo
      },
    });
  
    return updateUser;
  }

  async remove(id: number) {
    const user = await prisma.usuarios.delete({
      where: { idusuario: id },
    })
    return user;
  }

  hashPassword(password: string): string {
    const md5sum = crypto.createHash('md5');
    md5sum.update(password);
    return md5sum.digest('hex');
  }
}

