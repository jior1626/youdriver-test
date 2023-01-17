import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../user/user.dto";
import { PaymentCardDto } from "./payment-card.dto";

export class SavePaymentDto {

    @ApiProperty()
    user: UserDto;

    @ApiProperty()
    type_payment: string;

    @ApiProperty()
    payment_card: PaymentCardDto;

}