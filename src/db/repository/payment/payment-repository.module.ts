import { PaymentRepositoryService } from './payment-repository.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PaymentMapper } from './mapper/payment.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/db/entities/payment.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentEntity])
    ],
    controllers: [],
    providers: [
        PaymentMapper,
        PaymentRepositoryService,
    ],
    exports:[
        PaymentMapper,
        PaymentRepositoryService,
        
    ]
})
export class PaymentRepositoryModule { }
