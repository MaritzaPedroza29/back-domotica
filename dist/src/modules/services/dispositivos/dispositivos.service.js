"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivosService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const axios_1 = require("axios");
const prisma = new client_1.PrismaClient();
const data = [];
let DispositivosService = class DispositivosService {
    async create(createDispositivoDto) {
        const newDispositivo = await prisma.dispositivos.create({
            data: createDispositivoDto,
        });
        return newDispositivo;
    }
    async findAll() {
        const alldevice = await prisma.dispositivos.findMany();
        return alldevice;
    }
    findOne(id) {
        return `This action returns a #${id} dispositivo`;
    }
    async update(id, updateDispositivoDto) {
        const { nombre_dispositivo, salonesIdsalon } = updateDispositivoDto;
        const updateDispositivo = await prisma.dispositivos.update({
            where: {
                iddispositivo: id,
            },
            data: {
                nombre_dispositivo: nombre_dispositivo || undefined,
                salonesIdsalon: salonesIdsalon || undefined,
            },
        });
        return updateDispositivo;
    }
    async remove(id) {
        const dispositivo = await prisma.dispositivos.delete({
            where: { iddispositivo: id },
        });
        return dispositivo;
    }
    getdeviceid(deviceIds) {
        let enchufle = '';
        let medidor = '';
        for (let i = 0; i < deviceIds.length; i++) {
            enchufle = deviceIds[1];
            medidor = deviceIds[2];
        }
        this.getenchufle(enchufle);
        this.getmedidor(medidor);
    }
    async getenchufle(idenchfle) {
        try {
            const response = await axios_1.default.get(`http://localhost:8000/dispositivo/${idenchfle}`);
            data.push("vatios:" + response.data.body.weight);
        }
        catch (err) {
            console.error(err);
        }
    }
    async getmedidor(idmedidor) {
        try {
            const response = await axios_1.default.get(`http://localhost:8000/dispositivo/${idmedidor}`);
            data.push("temperatura:" + response.data.body.temperature);
        }
        catch (err) {
            console.error(err);
        }
    }
    async commandenchufle(idmedidor, comando) {
        try {
            const response = await axios_1.default.post(`http://localhost:8000/comandodispositivo/${idmedidor}/${comando}`);
            return response.data;
        }
        catch (err) {
            console.error(err);
        }
    }
    async getdatadevice() {
        return data;
    }
};
exports.DispositivosService = DispositivosService;
exports.DispositivosService = DispositivosService = __decorate([
    (0, common_1.Injectable)()
], DispositivosService);
//# sourceMappingURL=dispositivos.service.js.map