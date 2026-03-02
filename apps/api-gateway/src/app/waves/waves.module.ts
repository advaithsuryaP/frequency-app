import { Module } from '@nestjs/common';
import { WavesService } from './waves.service';
import { WavesController } from './waves.controller';

@Module({
    controllers: [WavesController],
    providers: [WavesService]
})
export class WavesModule {}
