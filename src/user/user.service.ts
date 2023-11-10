import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const newUser = await prisma.usuarios.create({
      data: createUserDto,
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await prisma.usuarios.delete({
      where: { idusuario: id },
    })
    return user;
  }
}

