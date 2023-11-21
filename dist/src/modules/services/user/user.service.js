"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const crypto = require("crypto");
const prisma = new client_1.PrismaClient();
let UserService = class UserService {
    async create(createUserDto) {
        const { nombre, correo, clave, imagen } = createUserDto;
        const hashedPassword = this.hashPassword(clave);
        const newUser = await prisma.usuarios.create({
            data: {
                nombre,
                correo,
                clave: hashedPassword,
                imagen,
            },
        });
        return newUser;
    }
    async findAll() {
        const allUsers = await prisma.usuarios.findMany();
        return allUsers;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async update(id, updateUserDto) {
        const { nombre, correo } = updateUserDto;
        const updateUser = await prisma.usuarios.update({
            where: {
                idusuario: id,
            },
            data: {
                nombre: nombre || undefined,
                correo: correo || undefined,
            },
        });
        return updateUser;
    }
    async remove(id) {
        const user = await prisma.usuarios.delete({
            where: { idusuario: id },
        });
        return user;
    }
    hashPassword(password) {
        const md5sum = crypto.createHash('md5');
        md5sum.update(password);
        return md5sum.digest('hex');
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map