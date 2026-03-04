/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { WAVES_PACKAGE_NAME } from '@frequency-app/waves-contracts';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: WAVES_PACKAGE_NAME,
            protoPath: join(__dirname, 'proto/waves.proto')
        }
    });

    await app.listen();

    Logger.log(`🚀 Waves microservice is running on gRPC server`);
}

bootstrap();
