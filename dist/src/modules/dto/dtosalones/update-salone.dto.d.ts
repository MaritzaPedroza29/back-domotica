import { CreateSaloneDto } from './create-salone.dto';
declare const UpdateSaloneDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSaloneDto>>;
export declare class UpdateSaloneDto extends UpdateSaloneDto_base {
    idsalon: number;
    nombre_salon: string;
    idusuario: number;
}
export {};
