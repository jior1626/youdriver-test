import { Injectable } from "@nestjs/common";
import { PaymentDto } from "src/db/dto/payment/payment.dto";
import { PaymentEntity } from "src/db/entities/payment.entity";

@Injectable()
export class PaymentMapper {

    dtoToEntity(paymentDto: PaymentDto): PaymentEntity {
        return new PaymentEntity(paymentDto.id, paymentDto.paymentname, paymentDto.type, paymentDto.email, paymentDto.phone);
    }

    entityToDto(paymentEntity: PaymentEntity): PaymentDto {
        return new PaymentDto(paymentEntity.id, paymentEntity.paymentname, paymentEntity.type, paymentEntity.email, paymentEntity.phone);
    }

}