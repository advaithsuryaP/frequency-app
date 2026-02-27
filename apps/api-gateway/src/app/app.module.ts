import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './app.constants';
import { TransactionsController } from '../transactions/transactions.controller';
import { AccountsController } from '../accounts/accounts.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: MICROSERVICES_CLIENTS.TRANSACTION_SERVICE,
                transport: Transport.TCP,
                options: {
                    port: 4001
                }
            },
            {
                name: MICROSERVICES_CLIENTS.ACCOUNT_SERVICE,
                transport: Transport.TCP,
                options: {
                    port: 4002
                }
            },
            {
                name: MICROSERVICES_CLIENTS.USER_SERVICE,
                transport: Transport.TCP,
                options: {
                    port: 4003
                }
            }
        ])
    ],
    controllers: [AppController, TransactionsController, AccountsController],
    providers: [AppService]
})
export class AppModule {}
