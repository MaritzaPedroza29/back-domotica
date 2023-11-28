import { SalonesService } from '../../services/salones/salones.service';
import { CreateSaloneDto } from '../../dto/dtosalones/create-salone.dto';
import { UpdateSaloneDto } from '../../dto/dtosalones/update-salone.dto';
export declare class SalonesController {
    private readonly salonesService;
    constructor(salonesService: SalonesService);
    create(createSaloneDto: CreateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: string, updateSaloneDto: UpdateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
    remove(id: string): Promise<{
        idsalon: number;
        nombre_salon: string;
        usuariosIdusuario: number;
    }>;
}
