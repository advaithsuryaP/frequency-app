/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            port: 4001
        }
    });

    // const globalPrefix = 'api';
    // app.setGlobalPrefix(globalPrefix);
    // const port = process.env.PORT || 3000;
    await app.listen();
    console.log('Transaction microservice is running on port 4001');
    // Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
