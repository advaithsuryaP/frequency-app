import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from '../app/app.constants';

@Controller('transactions')
export class TransactionsController {
    constructor(
        @Inject(MICROSERVICES_CLIENTS.ACCOUNTS_REDIS_SERVICE) private readonly accountsRedisService: ClientProxy
    ) {}

    @MessagePattern('create_transaction')
    createTransaction(@Payload() transaction: { accountId: string; amount: number }) {
        console.log('createTransaction in the transaction service', transaction);
        this.accountsRedisService.emit('transaction.created', {
            accountId: transaction.accountId,
            amount: transaction.amount
        });
        return this.accountsRedisService.send('get_account', transaction.accountId);
        // return { message: 'Transaction created successfully', transaction };
    }
}
