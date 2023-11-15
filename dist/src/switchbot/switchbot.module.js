"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchbotModule = void 0;
const common_1 = require("@nestjs/common");
const switchbot_service_1 = require("./switchbot.service");
const switchbot_controller_1 = require("./switchbot.controller");
const axios_1 = require("@nestjs/axios");
let SwitchbotModule = class SwitchbotModule {
};
exports.SwitchbotModule = SwitchbotModule;
exports.SwitchbotModule = SwitchbotModule = __decorate([
    (0, common_1.Module)({
        controllers: [switchbot_controller_1.SwitchbotController],
        providers: [switchbot_service_1.SwitchbotService],
        imports: [axios_1.HttpModule],
    })
], SwitchbotModule);
//# sourceMappingURL=switchbot.module.js.map