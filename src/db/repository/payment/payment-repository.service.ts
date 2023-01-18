/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentCardDto } from 'src/db/dto/payment/payment-card.dto';
import { UserDto } from 'src/db/dto/user/User.dto';
import { MethodPaymentEntity } from 'src/db/entities/payment.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { MethodPaymentCardMapper } from './mapper/payment-method.mapper';

@Injectable()
export class PaymentRepositoryService { 

    constructor(
        @InjectRepository(MethodPaymentEntity)     
        private paymentsRepository: Repository<MethodPaymentEntity>,
        private mapperPayment: MethodPaymentCardMapper
    ){}

    getAllPayments(): Promise<MethodPaymentEntity[]> {
        return this.paymentsRepository.find();
    }

    findPaymentById(id): Promise<MethodPaymentEntity> {
        return this.paymentsRepository.findOneByOrFail({id: id});
    }

    createMethodPayment(payment: PaymentCardDto, user: UserEntity): Promise<MethodPaymentEntity> {
        const newData = this.mapperPayment.PaymentCardDtoToEntity(payment, user)
        return this.paymentsRepository.save(newData);
    }
}
