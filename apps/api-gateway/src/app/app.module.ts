import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WavesModule } from './waves/waves.module';

@Module({
    imports: [WavesModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
