import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../user/User.dto";
import { PaymentCardDto } from "./payment-card.dto";

export class SavePaymentSourceDto {

    @ApiProperty()
    type: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    acceptance_token: string;

    @ApiProperty()
    customer_email: string;

}