import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaveService } from './application/services/wave.service';
import { WaveEntity } from './infrastructure/persistence/entities/wave.entity';
import { WaveTypeormRepository } from './infrastructure/persistence/repositories/wave-typeorm.repository';
import { WaveGrpcController } from './transport/grpc/wave.grpc.controller';
import { WAVE_REPOSITORY } from './domain/ports/wave.repository.port';
import { WaveEventsController } from './transport/events/wave.events.controller';

@Module({
    controllers: [WaveGrpcController, WaveEventsController],
    providers: [
        WaveService,
        {
            provide: WAVE_REPOSITORY,
            useClass: WaveTypeormRepository
        }
    ],
    imports: [TypeOrmModule.forFeature([WaveEntity])]
})
export class WaveModule {}
