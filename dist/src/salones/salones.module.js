"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonesModule = void 0;
const common_1 = require("@nestjs/common");
const salones_service_1 = require("./salones.service");
const salones_controller_1 = require("./salones.controller");
let SalonesModule = class SalonesModule {
};
exports.SalonesModule = SalonesModule;
exports.SalonesModule = SalonesModule = __decorate([
    (0, common_1.Module)({
        controllers: [salones_controller_1.SalonesController],
        providers: [salones_service_1.SalonesService],
    })
], SalonesModule);
//# sourceMappingURL=salones.module.js.map