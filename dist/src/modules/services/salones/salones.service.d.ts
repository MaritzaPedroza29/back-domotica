import { CreateSaloneDto } from '../../dto/dtosalones/create-salone.dto';
import { UpdateSaloneDto } from '../../dto/dtosalones/update-salone.dto';
export declare class SalonesService {
    create(createSaloneDto: CreateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateSaloneDto: UpdateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
    remove(id: number): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
}
