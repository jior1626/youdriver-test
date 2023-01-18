import { Injectable, Logger } from "@nestjs/common";
import { PaymentCardDto } from "src/db/dto/payment/payment-card.dto";
import { PaymentSourceDto } from "src/db/dto/payment/payment-source.dto";
import { PaymentSourcesEntity } from "src/db/entities/payment-source.entity";

import { UserEntity } from "src/db/entities/user.entity";

@Injectable()
export class PaymentSourceMapper {

    paymentSourceEntityToPaymentSourceDto(paymentEntity: PaymentSourcesEntity, user: UserEntity): PaymentSourceDto {
        let paymeCard = new PaymentSourceDto();
        // paymeCard.type = paymentEntity.;
        // paymeCard.token = paymentEntity.token;
        // paymeCard.acceptance_token = paymentEntity.;
        // paymeCard.customer_email = paymentEntity.customer_email;
        // paymeCard.id = paymentEntity.id;
        // paymeCard.number = paymentEntity.number_card;
        // paymeCard.cvc = paymentEntity.cvc;
        // paymeCard.exp_month = paymentEntity.exp_month;
        // paymeCard.exp_year = paymentEntity.exp_year;
        // paymeCard.card_holder = user.username;
        // paymeCard.token = paymentEntity.token;
        return paymeCard;
    }


    paymentSourceDtoToPaymentSourceEntity(paymentCard: PaymentSourceDto, user: UserEntity): PaymentSourcesEntity {
        let methodPaymentEntity = new PaymentSourcesEntity();
        // methodPaymentEntity.user = user;
        // methodPaymentEntity.number_card = paymentCard.number;
        // methodPaymentEntity.cvc = paymentCard.cvc;
        // methodPaymentEntity.exp_month = paymentCard.exp_month;
        // methodPaymentEntity.exp_year = paymentCard.exp_year;
        // methodPaymentEntity.token = paymentCard.token;
        return methodPaymentEntity;
    }
}