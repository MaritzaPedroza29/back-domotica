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
    constructor() {
        this.estaPrendido = false;
    }
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
        console.log(deviceIds);
        let enchufle = '';
        let medidor = '';
        let enchuflepuerta = '';
        for (let i = 0; i < deviceIds.length; i++) {
            enchuflepuerta = deviceIds[1];
            enchufle = deviceIds[2];
            medidor = deviceIds[3];
        }
        this.getenchufle(enchufle);
        this.getmedidor(medidor);
        this.getenchuflepuerta(enchuflepuerta);
        this.obtenerEstado();
    }
    async getenchufle(idenchfle) {
        try {
            const response = await axios_1.default.get(`http://localhost:8000/dispositivo/${idenchfle}`);
            const lastDataItem = data[data.length - 1] || {};
            lastDataItem['vatios'] = response.data.body.weight + "W";
            lastDataItem['power'] = response.data.body.power;
            if (data.length === 0) {
                data.push(lastDataItem);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async getenchuflepuerta(idenchflepuerta) {
        try {
            const response = await axios_1.default.get(`http://localhost:8000/dispositivo/${idenchflepuerta}`);
            const lastDataItem = data[data.length - 1] || {};
            lastDataItem['power_puerta'] = response.data.body.power;
            if (data.length === 0) {
                data.push(lastDataItem);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async getmedidor(idmedidor) {
        try {
            const response = await axios_1.default.get(`http://localhost:8000/dispositivo/${idmedidor}`);
            const lastDataItem = data[data.length - 1] || {};
            lastDataItem['temperatura'] = response.data.body.temperature + "°C";
            if (data.length === 0) {
                data.push(lastDataItem);
            }
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
    obtenerEstado() {
        const lastDataItem = data[data.length - 1] || {};
        lastDataItem['estadoaire'] = this.estaPrendido;
        if (data.length === 0) {
            data.push(lastDataItem);
        }
        return this.estaPrendido;
    }
    async getdatadevice() {
        return data;
    }
    async commandaire(idaire, comando) {
        const simulatedResponse = {
            data: {
                body: {
                    items: [{ deviceID: idaire, message: "success", code: 100 }],
                },
            },
            message: 'success',
            statusCode: 100,
        };
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (comando === 'turnOn') {
            this.estaPrendido = true;
        }
        if (comando === 'turnOff') {
            this.estaPrendido = false;
        }
        return [simulatedResponse];
    }
};
exports.DispositivosService = DispositivosService;
exports.DispositivosService = DispositivosService = __decorate([
    (0, common_1.Injectable)()
], DispositivosService);
//# sourceMappingURL=dispositivos.service.js.map