/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSourceDto } from 'src/db/dto/payment/payment-source.dto';
import { PaymentSourcesEntity } from 'src/db/entities/payment-source.entity';

import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { PaymentSourceMapper } from './mapper/payment-source.mapper';


@Injectable()
export class PaymentSourceRepositoryService { 

    constructor(
        @InjectRepository(PaymentSourcesEntity)     
        private paymentSourceRepository: Repository<PaymentSourcesEntity>,
        private mapperPaymentSource: PaymentSourceMapper
    ){}

    getAllPaymentSources(): Promise<PaymentSourcesEntity[]> {
        return this.paymentSourceRepository.find();
    }

    findPaymentSourceById(id): Promise<PaymentSourcesEntity> {
        return this.paymentSourceRepository.findOneByOrFail({id: id});
    }

    createPaymentSource(paymentSource: PaymentSourceDto, user: UserEntity): Promise<PaymentSourcesEntity> {
        const newData = this.mapperPaymentSource.paymentSourceDtoToPaymentSourceEntity(paymentSource, user)
        return this.paymentSourceRepository.save(newData);
    }
}
