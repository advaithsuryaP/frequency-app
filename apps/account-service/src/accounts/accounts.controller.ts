import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('accounts')
export class AccountsController {
    @MessagePattern('get_accounts')
    getAccounts() {
        return [
            { id: 1, name: 'Account 1' },
            { id: 2, name: 'Account 2' },
            { id: 3, name: 'Account 3' }
        ];
    }
}
