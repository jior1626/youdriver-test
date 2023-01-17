import { Injectable, Logger } from "@nestjs/common";
import { PaymentCardDto } from "src/db/dto/payment/payment-card.dto";
import { SavePaymentDto } from "src/db/dto/payment/save-payment.dto";
import { UserDto } from "src/db/dto/user/user.dto";
import { MethodPaymentEntity } from "src/db/entities/payment.entity";
import { UserEntity } from "src/db/entities/user.entity";

@Injectable()
export class MethodPaymentCardMapper {

    entityToPaymentCardDto(paymentEntity: MethodPaymentEntity, user: UserEntity): PaymentCardDto {
        Logger.log(paymentEntity, "paymentEntity")
        let paymeCard = new PaymentCardDto();
        paymeCard.id = paymentEntity.id;
        paymeCard.number = paymentEntity.number_card;
        paymeCard.cvc = paymentEntity.cvc;
        paymeCard.exp_month = paymentEntity.exp_month;
        paymeCard.exp_year = paymentEntity.exp_year;
        paymeCard.card_holder = user.username;
        paymeCard.token = paymentEntity.token;
        return paymeCard;
    }


    entityToSavePaymentDto(paymentEntity: MethodPaymentEntity): SavePaymentDto {
        let savePaymentDto = new SavePaymentDto();
        savePaymentDto.user.id = paymentEntity.user.id;
        savePaymentDto.user.username = paymentEntity.user.username;
        savePaymentDto.user.type = paymentEntity.user.type;
        savePaymentDto.user.email = paymentEntity.user.email;
        savePaymentDto.user.phone = paymentEntity.user.phone;
        savePaymentDto.payment_card.id = paymentEntity.id;
        savePaymentDto.payment_card.number = paymentEntity.number_card;
        savePaymentDto.payment_card.cvc = paymentEntity.cvc;
        savePaymentDto.payment_card.exp_month = paymentEntity.exp_month;
        savePaymentDto.payment_card.exp_year = paymentEntity.exp_year;
        savePaymentDto.payment_card.card_holder = paymentEntity.user.username;
        savePaymentDto.payment_card.token = paymentEntity.token;
        savePaymentDto.type_payment = "card";

        return savePaymentDto;
    }

    PaymentCardDtoToEntity(paymentCard: PaymentCardDto, user: UserEntity): MethodPaymentEntity {

        let methodPaymentEntity = new MethodPaymentEntity();
        methodPaymentEntity.user = user;
        methodPaymentEntity.number_card = paymentCard.number;
        methodPaymentEntity.cvc = paymentCard.cvc;
        methodPaymentEntity.exp_month = paymentCard.exp_month;
        methodPaymentEntity.exp_year = paymentCard.exp_year;
        methodPaymentEntity.token = paymentCard.token;
        return methodPaymentEntity;
    }



}