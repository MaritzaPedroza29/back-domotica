import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
export declare class DispositivosController {
    private readonly dispositivosService;
    constructor(dispositivosService: DispositivosService);
    create(createDispositivoDto: CreateDispositivoDto): Promise<{
        iddispositivo: string;
        nombre_dispositivo: string;
        salonesIdsalon: number;
    }>;
    getdatadevice(): Promise<any[]>;
    comando(id: string, comando: string): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateDispositivoDto: UpdateDispositivoDto): Promise<{
        iddispositivo: string;
        nombre_dispositivo: string;
        salonesIdsalon: number;
    }>;
    remove(id: string): Promise<{
        iddispositivo: string;
        nombre_dispositivo: string;
        salonesIdsalon: number;
    }>;
    getState(deviceId: string[]): void;
}
