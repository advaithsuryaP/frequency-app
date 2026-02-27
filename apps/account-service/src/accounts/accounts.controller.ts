import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('accounts')
export class AccountsController {
    @MessagePattern('create_account')
    createAccount(@Payload() account: any) {
        console.log('createAccount in the account service', account);
        return { message: 'Account created successfully', account };
    }
}
