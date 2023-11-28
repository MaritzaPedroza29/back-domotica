"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let SalonesService = class SalonesService {
    async create(createSaloneDto) {
        const newSalones = await prisma.salones.create({
            data: {
                nombre_salon: createSaloneDto.nombre_salon,
                usuariosIdusuario: createSaloneDto.idusuario,
            },
        });
        return newSalones;
    }
    async findAll() {
        const allsalones = await prisma.salones.findMany();
        return allsalones;
    }
    findOne(id) {
        return `This action returns a #${id} salone`;
    }
    async update(id, updateSaloneDto) {
        const { nombre_salon } = updateSaloneDto;
        const updateSalon = await prisma.salones.update({
            where: {
                idsalon: id,
            },
            data: {
                nombre_salon: nombre_salon || undefined,
            },
        });
        return updateSalon;
    }
    async remove(id) {
        const salon = await prisma.salones.delete({
            where: { idsalon: id },
        });
        return salon;
    }
};
exports.SalonesService = SalonesService;
exports.SalonesService = SalonesService = __decorate([
    (0, common_1.Injectable)()
], SalonesService);
//# sourceMappingURL=salones.service.js.map