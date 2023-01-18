import { PaymentSourceRepositoryService } from './payment-source-repository.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PaymentSourceMapper } from './mapper/payment-source.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSourcesEntity } from 'src/db/entities/payment-source.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentSourcesEntity])
    ],
    controllers: [],
    providers: [
        PaymentSourceMapper,
        PaymentSourceRepositoryService,
    ],
    exports:[
        PaymentSourceMapper,
        PaymentSourceRepositoryService,
        
    ]
})
export class PaymentSourceRepositoryModule { }
