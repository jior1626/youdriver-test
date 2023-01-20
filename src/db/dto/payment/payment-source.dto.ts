import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../user/User.dto";
import { PaymentCardDto } from "./payment-card.dto";

export class PaymentSourceDto {

    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty({
        required: true
    })
    payment: PaymentCardDto;

    @ApiProperty({
        required: true
    })
    user: UserDto;

    @ApiProperty({
        required: true
    })
    acceptance_token: string;

}