import { PartialType } from '@nestjs/mapped-types';
import { CreateSwitchbotDto } from './create-switchbot.dto';

export class UpdateSwitchbotDto extends PartialType(CreateSwitchbotDto) {}
