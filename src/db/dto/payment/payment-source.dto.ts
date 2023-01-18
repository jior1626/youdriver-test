import { ApiProperty } from "@nestjs/swagger";

export class PaymentSourceDto {

    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty({
        required: true
    })
    type: string;

    @ApiProperty({
        required: true
    })
    token: string;

    @ApiProperty({
        required: true
    })
    acceptance_token: string;

    @ApiProperty({
        required: true
    })
    customer_email: string;

}