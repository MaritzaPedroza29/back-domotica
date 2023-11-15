import { Test, TestingModule } from '@nestjs/testing';
import { SwitchbotController } from './switchbot.controller';
import { SwitchbotService } from './switchbot.service';

describe('SwitchbotController', () => {
  let controller: SwitchbotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwitchbotController],
      providers: [SwitchbotService],
    }).compile();

    controller = module.get<SwitchbotController>(SwitchbotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
