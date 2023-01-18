import { ApiProperty } from "@nestjs/swagger";


class PaymentMethod {
    type: string;
    token: string;
    installments: number
}

class CustomerData {
    phone_number: string;
    full_name: string;
    legal_id: string;
    legal_id_type: string
}

class ShippingAndress {
    address_line_1: string;
    address_line_2: string;
    country: string;
    region: string;
    city: string;
    name: string;
    phone_number: string;
    postal_code: string;
}

export class SaveTransactionDto {

    @ApiProperty()
    acceptance_token: string;

    @ApiProperty()
    amount_in_cents: number;

    @ApiProperty()
    currency: string;

    @ApiProperty()
    customer_email: string;

    @ApiProperty()
    payment_method: PaymentMethod;

    @ApiProperty()
    payment_source_id: number;

    @ApiProperty()
    redirect_url: string;

    @ApiProperty()
    reference: string;

    @ApiProperty()
    customer_data: CustomerData

    @ApiProperty()
    shipping_address: ShippingAndress
}