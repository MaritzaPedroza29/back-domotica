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
exports.SwitchbotController = void 0;
const common_1 = require("@nestjs/common");
const switchbot_service_1 = require("./switchbot.service");
const create_switchbot_dto_1 = require("./dto/create-switchbot.dto");
const update_switchbot_dto_1 = require("./dto/update-switchbot.dto");
let SwitchbotController = class SwitchbotController {
    constructor(switchbotService) {
        this.switchbotService = switchbotService;
    }
    create(createSwitchbotDto) {
        return this.switchbotService.create(createSwitchbotDto);
    }
    findAll() {
        return this.switchbotService.findAll();
    }
    findOne(id) {
        return this.switchbotService.findOne(+id);
    }
    update(id, updateSwitchbotDto) {
        return this.switchbotService.update(+id, updateSwitchbotDto);
    }
    remove(id) {
        return this.switchbotService.remove(+id);
    }
    sendCommand(deviceId, body) {
        const { command, parameter } = body;
        return this.switchbotService.sendSwitchbotCommand(deviceId, command, parameter);
    }
    getState(deviceId) {
        return this.switchbotService.getSwitchbotState(deviceId);
    }
};
exports.SwitchbotController = SwitchbotController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_switchbot_dto_1.CreateSwitchbotDto]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_switchbot_dto_1.UpdateSwitchbotDto]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':deviceId/send-command'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "sendCommand", null);
__decorate([
    (0, common_1.Get)(':deviceId/get-state'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SwitchbotController.prototype, "getState", null);
exports.SwitchbotController = SwitchbotController = __decorate([
    (0, common_1.Controller)('switchbot'),
    __metadata("design:paramtypes", [switchbot_service_1.SwitchbotService])
], SwitchbotController);
//# sourceMappingURL=switchbot.controller.js.map