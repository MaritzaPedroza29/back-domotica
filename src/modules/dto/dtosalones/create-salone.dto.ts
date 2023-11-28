import { IsNumber, IsString, IsNotEmpty} from "class-validator";
export class CreateSaloneDto {
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
