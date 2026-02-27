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
    const tcpMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            port: 4002
        }
    });
    const redisMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            host: 'localhost',
            port: 6379
        }
    });

    await Promise.all([tcpMicroservice.listen(), redisMicroservice.listen()]);
    // const globalPrefix = 'api';
    // app.setGlobalPrefix(globalPrefix);
    // const port = process.env.PORT || 3000;
    // await app.listen();
    console.log('Account microservice is running on port 4002 and Redis microservice is running on port 6379');
    // Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
