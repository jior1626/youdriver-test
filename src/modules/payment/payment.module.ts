import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/db/repository/user/user-repository.module';
import { PaymentRepositoryModule } from 'src/db/repository/payment/payment-repository.module';
import { WompiModule } from '../wompi/wompi.module';
import { Logger } from '@nestjs/common/services';
import { PaymentSourceRepositoryModule } from 'src/db/repository/payment-source/payment-source-repository.module';

@Module({
    imports: [
        UserRepositoryModule,
        PaymentRepositoryModule,
        PaymentSourceRepositoryModule,
        WompiModule,
    ],
    controllers: [
        PaymentController
    ],
    providers: [
        PaymentService,
        Logger
    ],
})
export class PaymentModule { }
