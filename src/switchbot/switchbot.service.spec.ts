import { Test, TestingModule } from '@nestjs/testing';
import { SwitchbotService } from './switchbot.service';

describe('SwitchbotService', () => {
  let service: SwitchbotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwitchbotService],
    }).compile();

    service = module.get<SwitchbotService>(SwitchbotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
