import { ApiProperty } from "@nestjs/swagger";

export class SavePaymentDto {
    
    @ApiProperty()
    client: {
        id?: number,
        username: string,
        phone: string,
        email: string,
        type: string,
    };

    @ApiProperty()
    type_payment: string;

    @ApiProperty()
    payment_card: {
        number: string,
        cvc: string,
        exp_month: string,
        exp_year: string,
        card_holder: string
    }

    @ApiProperty()
    payment_nequi: {
        phone_number: string,
    }
}