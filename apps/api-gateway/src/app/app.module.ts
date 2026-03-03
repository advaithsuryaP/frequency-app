import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices';
import { protobufPackage } from '@frequency-app/waves-contracts';
import { join } from 'path';
import { WavesController } from './waves/waves.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: protobufPackage,
                transport: Transport.GRPC,
                options: {
                    package: protobufPackage,
                    protoPath: join(__dirname, 'proto/waves.proto')
                }
            }
        ])
    ],
    controllers: [AppController, WavesController],
    providers: [AppService]
})
export class AppModule {}
