import { Module } from '@nestjs/common';
import { DispositivosService } from '../../services/dispositivos/dispositivos.service';
import { DispositivosController } from '../../controllers/dispositivos/dispositivos.controller';

@Module({
  controllers: [DispositivosController],
  providers: [DispositivosService],
})
export class DispositivosModule {}
