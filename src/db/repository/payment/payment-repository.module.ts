import { PaymentRepositoryService } from './payment-repository.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MethodPaymentCardMapper } from './mapper/payment.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MethodPaymentEntity } from 'src/db/entities/payment.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([MethodPaymentEntity])
    ],
    controllers: [],
    providers: [
        MethodPaymentCardMapper,
        PaymentRepositoryService,
    ],
    exports:[
        MethodPaymentCardMapper,
        PaymentRepositoryService,
        
    ]
})
export class PaymentRepositoryModule { }
