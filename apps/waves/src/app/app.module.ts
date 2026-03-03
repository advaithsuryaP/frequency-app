import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaveController } from './wave/wave.controller';

@Module({
    imports: [],
    controllers: [AppController, WaveController],
    providers: [AppService]
})
export class AppModule {}
