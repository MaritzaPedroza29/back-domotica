import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateSwitchbotDto } from './dto/create-switchbot.dto';
import { UpdateSwitchbotDto } from './dto/update-switchbot.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import axios from 'axios';
const crypto = require('crypto');
const https = require('https');

@Injectable()
export class SwitchbotService {
  constructor(private readonly httpService: HttpService) {}
  create(createSwitchbotDto: CreateSwitchbotDto) {
    return 'This action adds a new switchbot';
  }

  findAll() {
    return `This action returns all switchbot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} switchbot`;
  }

  update(id: number, updateSwitchbotDto: UpdateSwitchbotDto) {
    return `This action updates a #${id} switchbot`;
  }

  remove(id: number) {
    return `This action removes a #${id} switchbot`;
  }
  sendSwitchbotCommand(deviceId: string, command: string, parameter?: string): Observable<AxiosResponse<any>> {
    const url = `https://api.switch-bot.com/v1.1/devices/${deviceId}/commands`;

    const data = {
      command,
      parameter: parameter || 'default',
      commandType: 'command',
    };

    const headers = this.generateHeaders();

    return this.httpService.post(url, data, { headers });
  }

  getSwitchbotState(deviceId: string){
   
    
  }
  
  private generateHeaders(): { [key: string]: string } {
    const t = Date.now();
    const nonce = this.guidv4();
    const data = process.env.SWITCHBOT_API_TOKEN + t + nonce;
    console.log(data);
    const signTerm = crypto.createHmac('sha256', process.env.SWITCHBOT_SECRET)
      .update(Buffer.from(data, 'utf-8'))
      .digest();
    const sign = signTerm.toString("base64");

    return {
      Authorization: process.env.SWITCHBOT_API_TOKEN,
      sign: sign,
      nonce: nonce,
      t: Date.now().toString(),
    };
  }

  private guidv4(): string {
    const data = crypto.randomBytes(16);
    data[6] = (data[6] & 0x0f) | 0x40;
    data[8] = (data[8] & 0x3f) | 0x80;
    return data.toString('hex', 0, 16);
  }
}
