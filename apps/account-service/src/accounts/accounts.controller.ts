import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller('accounts')
export class AccountsController {
    @MessagePattern('create_account')
    createAccount(@Payload() account: any) {
        console.log('createAccount in the account service', account);
        return { message: 'Account created successfully', account };
    }

    @MessagePattern('get_account')
    getAccount(@Payload() accountId: string) {
        console.log('getAccount in the account service', accountId);
        return { id: accountId, balance: 100, name: 'John Doe' };
    }

    @EventPattern('transaction.created')
    async updateAccountBalance(@Payload() transaction: { accountId: string; amount: number }) {
        console.log('updateAccountBalance in the account service', transaction);
    }
}
