import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices';
import { join } from 'path';
import { WavesController } from './waves/waves.controller';
import { WavesService } from './waves/waves.service';
import { WAVES_PACKAGE_NAME } from '@frequency-app/waves-contracts';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: WAVES_PACKAGE_NAME,
                transport: Transport.GRPC,
                options: {
                    package: WAVES_PACKAGE_NAME,
                    protoPath: join(__dirname, 'proto/waves.proto')
                }
            }
        ])
    ],
    controllers: [AppController, WavesController],
    providers: [AppService, WavesService]
})
export class AppModule {}
