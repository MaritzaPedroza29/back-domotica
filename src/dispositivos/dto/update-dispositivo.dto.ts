import { PartialType } from '@nestjs/mapped-types';
import { CreateDispositivoDto } from './create-dispositivo.dto';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDispositivoDto extends PartialType(CreateDispositivoDto) {
    @IsString()
    @IsNotEmpty()
    nombre_dispositivo: string;
  
    @IsNumber()
    @IsNotEmpty()
    salonesIdsalon: number; 
}
