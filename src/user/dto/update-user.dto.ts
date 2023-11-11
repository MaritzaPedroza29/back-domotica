import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class UpdateUserDto extends PartialType(CreateUserDto){
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsEmail()
    @IsNotEmpty()
    correo: string; 
}
