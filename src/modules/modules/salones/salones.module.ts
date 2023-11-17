import { Module } from '@nestjs/common';
import { SalonesService } from '../../services/salones/salones.service';
import { SalonesController } from '../../controllers/salones/salones.controller';

@Module({
  controllers: [SalonesController],
  providers: [SalonesService],
})
export class SalonesModule {}
