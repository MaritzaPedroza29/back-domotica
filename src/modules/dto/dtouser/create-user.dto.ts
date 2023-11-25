import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @Transform(({value}) => value.trim())
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  clave: string;

  @IsString()
  @IsNotEmpty()
  imagen: string;
}
