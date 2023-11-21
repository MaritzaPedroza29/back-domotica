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
exports.SalonesController = void 0;
const common_1 = require("@nestjs/common");
const salones_service_1 = require("../../services/salones/salones.service");
const create_salone_dto_1 = require("../../dto/dtosalones/create-salone.dto");
const update_salone_dto_1 = require("../../dto/dtosalones/update-salone.dto");
let SalonesController = class SalonesController {
    constructor(salonesService) {
        this.salonesService = salonesService;
    }
    create(createSaloneDto) {
        return this.salonesService.create(createSaloneDto);
    }
    findAll() {
        return this.salonesService.findAll();
    }
    findOne(id) {
        return this.salonesService.findOne(id);
    }
    update(id, updateSaloneDto) {
        return this.salonesService.update(+id, updateSaloneDto);
    }
    remove(id) {
        return this.salonesService.remove(+id);
    }
};
exports.SalonesController = SalonesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_salone_dto_1.CreateSaloneDto]),
    __metadata("design:returntype", void 0)
], SalonesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalonesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalonesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_salone_dto_1.UpdateSaloneDto]),
    __metadata("design:returntype", void 0)
], SalonesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalonesController.prototype, "remove", null);
exports.SalonesController = SalonesController = __decorate([
    (0, common_1.Controller)('salones'),
    __metadata("design:paramtypes", [salones_service_1.SalonesService])
], SalonesController);
//# sourceMappingURL=salones.controller.js.map