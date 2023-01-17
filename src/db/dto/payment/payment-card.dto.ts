import { ApiProperty } from "@nestjs/swagger";

export class PaymentCardDto {

    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty({
        required: true
    })
    number: string;

    @ApiProperty({
        required: true
    })
    cvc: string;

    @ApiProperty({
        required: true
    })
    exp_month: string;

    @ApiProperty({
        required: true
    })
    exp_year: string;

    @ApiProperty({
        required: false
    })
    card_holder: string

    @ApiProperty({
        nullable: true
    })
    token: string

}