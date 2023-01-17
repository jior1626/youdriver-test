import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/db/repository/user/user-repository.module';
import { PaymentRepositoryModule } from 'src/db/repository/payment/payment-repository.module';
import { WompiModule } from '../wompi/wompi.module';
import { Logger } from '@nestjs/common/services';

@Module({
    imports: [
        UserRepositoryModule,
        PaymentRepositoryModule,
        WompiModule,
    ],
    controllers: [
        RiderController
    ],
    providers: [
        RiderService,
        Logger
    ],
})
export class RiderModule { }
