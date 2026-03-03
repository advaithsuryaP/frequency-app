import { Module } from '@nestjs/common';
import { WavesController } from './waves.controller';

@Module({
    controllers: [WavesController],
    providers: []
})
export class WavesModule {}
