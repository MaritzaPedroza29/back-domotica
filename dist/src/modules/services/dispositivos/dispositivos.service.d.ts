import { CreateDispositivoDto } from '../../dto/dtodispositivos/create-dispositivo.dto';
import { UpdateDispositivoDto } from '../../dto/dtodispositivos/update-dispositivo.dto';
export declare class DispositivosService {
    private estaPrendido;
    create(createDispositivoDto: CreateDispositivoDto): Promise<{
        iddispositivo: string;
        nombre_dispositivo: string;
        salonesIdsalon: number;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
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
    getdeviceid(deviceIds: string[]): void;
    getenchufle(idenchfle: string): Promise<void>;
    getenchuflepuerta(idenchflepuerta: string): Promise<void>;
    getmedidor(idmedidor: string): Promise<void>;
    commandenchufle(idmedidor: string, comando: string): Promise<any>;
    obtenerEstado(): boolean;
    getdatadevice(): Promise<any[]>;
    commandaire(idaire: string, comando: string): Promise<any[]>;
}
