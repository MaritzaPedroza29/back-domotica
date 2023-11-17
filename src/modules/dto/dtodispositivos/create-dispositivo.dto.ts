import { IsNumber, IsString, IsNotEmpty} from "class-validator";

export class CreateDispositivoDto {
    @IsString()
    @IsNotEmpty()
    iddispositivo: string;

  @IsString()
  @IsNotEmpty()
  nombre_dispositivo: string;

  @IsNumber()
  @IsNotEmpty()
  salonesIdsalon: number;
}
