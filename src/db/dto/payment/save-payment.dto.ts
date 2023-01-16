import { ApiProperty } from "@nestjs/swagger";

export class SavePaymentDto {
    @ApiProperty()
    client: {
        id?: string,
        name: string
    };
    @ApiProperty()
    payment_card: {
        number: string,
        cvc: string,
        exp_month: string,
        exp_year: string,
        card_holder: string
    }
}