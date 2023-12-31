import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dto/dtouser/create-user.dto';
import { UpdateUserDto } from '../../dto/dtouser/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
    remove(id: string): Promise<{
        idusuario: number;
        nombre: string;
        correo: string;
        clave: string;
        imagen: string;
    }>;
}
