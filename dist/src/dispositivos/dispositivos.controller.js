"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivosController = void 0;
const common_1 = require("@nestjs/common");
const dispositivos_service_1 = require("./dispositivos.service");
const create_dispositivo_dto_1 = require("./dto/create-dispositivo.dto");
const update_dispositivo_dto_1 = require("./dto/update-dispositivo.dto");
let DispositivosController = class DispositivosController {
    constructor(dispositivosService) {
        this.dispositivosService = dispositivosService;
    }
    create(createDispositivoDto) {
        return this.dispositivosService.create(createDispositivoDto);
    }
    async getdatadevice() {
        await this.dispositivosService.getdatadevice();
        return this.dispositivosService.getdatadevice();
    }
    comando(id, comando) {
        return this.dispositivosService.commandenchufle(id, comando);
    }
    async findAll() {
        const dispositivos = await this.dispositivosService.findAll();
        const iddispositivo = dispositivos.map(dispositivo => dispositivo.iddispositivo);
        this.getState(iddispositivo);
        return dispositivos;
    }
    findOne(id) {
        return this.dispositivosService.findOne(+id);
    }
    update(id, updateDispositivoDto) {
        return this.dispositivosService.update(id, updateDispositivoDto);
    }
    remove(id) {
        return this.dispositivosService.remove(id);
    }
    getState(deviceId) {
        return this.dispositivosService.getdeviceid(deviceId);
    }
};
exports.DispositivosController = DispositivosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dispositivo_dto_1.CreateDispositivoDto]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/datadevice"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DispositivosController.prototype, "getdatadevice", null);
__decorate([
    (0, common_1.Post)("/comando/:id/:comando"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('comando')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "comando", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DispositivosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dispositivo_dto_1.UpdateDispositivoDto]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "remove", null);
__decorate([
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], DispositivosController.prototype, "getState", null);
exports.DispositivosController = DispositivosController = __decorate([
    (0, common_1.Controller)('dispositivos'),
    __metadata("design:paramtypes", [dispositivos_service_1.DispositivosService])
], DispositivosController);
//# sourceMappingURL=dispositivos.controller.js.map