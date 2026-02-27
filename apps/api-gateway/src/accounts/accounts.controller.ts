import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from '../app/app.constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller('accounts')
export class AccountsController {
    constructor(@Inject(MICROSERVICES_CLIENTS.ACCOUNT_SERVICE) private readonly accountsServiceClient: ClientProxy) {}

    @Post()
    createAccount(@Body() account: any) {
        console.log('createAccount in the api gateway', account);
        return this.accountsServiceClient.send('create_account', account);
    }
}
