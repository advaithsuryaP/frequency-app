import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsController } from '../transactions/transactions.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './app.constants';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: MICROSERVICES_CLIENTS.ACCOUNTS_REDIS_SERVICE,
                transport: Transport.REDIS,
                options: {
                    host: 'localhost',
                    port: 6379
                }
            }
        ])
    ],
    controllers: [AppController, TransactionsController],
    providers: [AppService]
})
export class AppModule {}
