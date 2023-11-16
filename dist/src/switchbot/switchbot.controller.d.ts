import { SwitchbotService } from './switchbot.service';
import { CreateSwitchbotDto } from './dto/create-switchbot.dto';
import { UpdateSwitchbotDto } from './dto/update-switchbot.dto';
export declare class SwitchbotController {
    private readonly switchbotService;
    constructor(switchbotService: SwitchbotService);
    create(createSwitchbotDto: CreateSwitchbotDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSwitchbotDto: UpdateSwitchbotDto): string;
    remove(id: string): string;
    sendCommand(deviceId: string, body: {
        command: string;
        parameter?: string;
    }): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
    getState(deviceId: string): void;
}
