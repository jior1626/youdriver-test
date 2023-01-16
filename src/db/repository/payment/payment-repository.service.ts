/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/db/entities/payment.entity';
import { Repository } from 'typeorm';
import { PaymentMapper } from './mapper/payment.mapper';

@Injectable()
export class PaymentRepositoryService { 

    constructor(
        @InjectRepository(PaymentEntity)     
        private paymentsRepository: Repository<PaymentEntity>,
        private mapper: PaymentMapper
    ){}

    getAllPayments(): Promise<PaymentEntity[]> {
        return this.paymentsRepository.find();
    }

    getAllPaymentIsDriver(): Promise<PaymentEntity[]> {
        return this.paymentsRepository.findBy({type: "driver"});
    }

    getAllPaymentIsRider(): Promise<PaymentEntity[]> {
        return this.paymentsRepository.findBy({type: "rider"});
    }

    findPaymentById(id): Promise<PaymentEntity> {
        return this.paymentsRepository.findOneByOrFail({id: id});
    }
}
