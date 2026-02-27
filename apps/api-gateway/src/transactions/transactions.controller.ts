import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from '../app/app.constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller('transactions')
export class TransactionsController {
    constructor(
        @Inject(MICROSERVICES_CLIENTS.TRANSACTION_SERVICE) private readonly transactionsServiceClient: ClientProxy
    ) {}

    @Post()
    createTransaction(@Body() transaction: any) {
        console.log('createTransaction in the api gateway', transaction);
        return this.transactionsServiceClient.send('createTransaction', transaction);
    }
}
