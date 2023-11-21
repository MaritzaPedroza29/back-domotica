import { CreateDispositivoDto } from './create-dispositivo.dto';
declare const UpdateDispositivoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDispositivoDto>>;
export declare class UpdateDispositivoDto extends UpdateDispositivoDto_base {
    nombre_dispositivo: string;
    salonesIdsalon: number;
}
export {};
