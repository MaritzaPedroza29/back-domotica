import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString, IsNotEmpty} from "class-validator";
import { CreateSaloneDto } from './create-salone.dto';

export class UpdateSaloneDto extends PartialType(CreateSaloneDto) {
@IsNumber()
@IsNotEmpty()
idsalon: number;

  @IsString()
  @IsNotEmpty()
  nombre_salon: string;
  
  @IsNumber()
  @IsNotEmpty()
  idusuario: number;
}
