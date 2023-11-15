import { HttpService } from '@nestjs/axios';
import { CreateSwitchbotDto } from './dto/create-switchbot.dto';
import { UpdateSwitchbotDto } from './dto/update-switchbot.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export declare class SwitchbotService {
    private readonly httpService;
    constructor(httpService: HttpService);
    create(createSwitchbotDto: CreateSwitchbotDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSwitchbotDto: UpdateSwitchbotDto): string;
    remove(id: number): string;
    sendSwitchbotCommand(deviceId: string, command: string, parameter?: string): Observable<AxiosResponse<any>>;
    getSwitchbotState(deviceId: string): Observable<AxiosResponse<any>>;
    private generateHeaders;
    private guidv4;
}
