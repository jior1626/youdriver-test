import { DriverController } from './driver.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { UserRepositoryModule } from 'src/db/repository/user/user-repository.module';
import { WompiModule } from '../wompi/wompi.module';
import { PaymentRepositoryModule } from 'src/db/repository/payment/payment-repository.module';

@Module({
    imports: [
        UserRepositoryModule,
        PaymentRepositoryModule,
        WompiModule
    ],
    controllers: [
        DriverController
    ],
    providers: [
        DriverService
    ],
})
export class DriverModule { }
