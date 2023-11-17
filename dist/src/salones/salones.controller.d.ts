import { SalonesService } from './salones.service';
import { CreateSaloneDto } from './dto/create-salone.dto';
import { UpdateSaloneDto } from './dto/update-salone.dto';
export declare class SalonesController {
    private readonly salonesService;
    constructor(salonesService: SalonesService);
    create(createSaloneDto: CreateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateSaloneDto: UpdateSaloneDto): Promise<{
        idsalon: number;
        nombre_salon: string;
    }>;
    remove(id: number): Promise<{
        idsalon: number;
        nombre_salon: string;
    }>;
}
