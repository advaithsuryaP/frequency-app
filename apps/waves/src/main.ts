/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { protobufPackage } from '@frequency-app/waves-contracts';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: protobufPackage,
            protoPath: join(__dirname, 'proto/waves.proto')
        }
    });

    await app.listen();

    Logger.log(`🚀 Waves microservice is running on gRPC channel`);
}

bootstrap();
