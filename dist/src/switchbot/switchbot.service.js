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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchbotService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const crypto = require('crypto');
const https = require('https');
let SwitchbotService = class SwitchbotService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    create(createSwitchbotDto) {
        return 'This action adds a new switchbot';
    }
    findAll() {
        return `This action returns all switchbot`;
    }
    findOne(id) {
        return `This action returns a #${id} switchbot`;
    }
    update(id, updateSwitchbotDto) {
        return `This action updates a #${id} switchbot`;
    }
    remove(id) {
        return `This action removes a #${id} switchbot`;
    }
    sendSwitchbotCommand(deviceId, command, parameter) {
        const url = `https://api.switch-bot.com/v1.1/devices/${deviceId}/commands`;
        const data = {
            command,
            parameter: parameter || 'default',
            commandType: 'command',
        };
        const headers = this.generateHeaders();
        return this.httpService.post(url, data, { headers });
    }
    getSwitchbotState(deviceId) {
        const url = `https://api.switch-bot.com/v1.1/devices/${deviceId}/status`;
        const headers = this.generateHeaders();
        return this.httpService.get(url, { headers });
    }
    generateHeaders() {
        const t = Date.now();
        const nonce = this.guidv4;
        const data = process.env.SWITCHBOT_API_TOKEN + t + nonce;
        console.log(data);
        const signTerm = crypto.createHmac('sha256', process.env.SWITCHBOT_SECRET)
            .update(Buffer.from(data, 'utf-8'))
            .digest();
        const sign = signTerm.toString("base64");
        return {
            "Authorization": process.env.SWITCHBOT_API_TOKEN,
            "sign": sign,
            "nonce": nonce,
            "t": Date.now().toString(),
        };
    }
    guidv4(data = null) {
        data = data || crypto.randomBytes(16);
        data[6] = (data[6] & 0x0f) | 0x40;
        data[8] = (data[8] & 0x3f) | 0x80;
        const hexString = Buffer.from(data).toString('hex');
        return `${hexString.substr(0, 8)}-${hexString.substr(8, 4)}-${hexString.substr(12, 4)}-${hexString.substr(16, 4)}-${hexString.substr(20)}`;
    }
};
exports.SwitchbotService = SwitchbotService;
exports.SwitchbotService = SwitchbotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SwitchbotService);
//# sourceMappingURL=switchbot.service.js.map