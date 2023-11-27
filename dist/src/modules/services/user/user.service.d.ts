import { CreateUserDto } from '../../dto/dtouser/create-user.dto';
import { UpdateUserDto } from '../../dto/dtouser/update-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    findOneByEmail(email: string): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
    remove(id: number): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
}
