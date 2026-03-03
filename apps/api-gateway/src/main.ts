/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';

    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // strips unknown props
            forbidNonWhitelisted: true, // throw if unknown props are sent
            transform: true, // transforms payloads to DTO instances
            transformOptions: { enableImplicitConversion: true }
        })
    );

    await app.listen(port);
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
