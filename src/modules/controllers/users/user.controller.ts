import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dto/dtouser/create-user.dto';
import { UpdateUserDto } from '../../dto/dtouser/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
   async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);
    return newUser; // Puedes devolver el usuario recién creado como parte de la respuesta si lo deseas
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
