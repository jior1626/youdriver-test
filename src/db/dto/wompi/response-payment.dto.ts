import { ApiProperty } from "@nestjs/swagger";

class Data {
    id: string;
    created_at: string;
    brand: string;
    name: string;
    last_four: string;
    bin: string;
    exp_year: string;
    exp_month: string;
    card_holder: string;
    created_with_cvc: boolean;
    expires_at: string;
    validity_ends_at: string
}

export class PaymentSaveResponse {
    @ApiProperty()
    status: string;
    @ApiProperty()
    data: Data
}

export class PaymentSourceResponse {
    @ApiProperty()
    metad: any;
    @ApiProperty()
    data: any
}