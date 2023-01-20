import { ApiProperty } from "@nestjs/swagger";

class PaymentMethodDto {
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
    installments: number
}

class CustomerData {
    @ApiProperty({
        required: true
    })
    phone_number: string;

    @ApiProperty({
        required: true
    })
    full_name: string;
    
    @ApiProperty({
        required: true
    })
    legal_id: string;
    
    @ApiProperty({
        required: true
    })
    legal_id_type: string;
}

class ShippingAndress {
    @ApiProperty({
        required: true
    })
    address_line_1: string;

    @ApiProperty({
        required: true
    })
    address_line_2: string;

    @ApiProperty({
        required: true
    })
    country: string;

    @ApiProperty({
        required: true
    })
    region: string;

    @ApiProperty({
        required: true
    })
    city: string;

    @ApiProperty({
        required: true
    })
    name: string;
    phone_number: string;
    postal_code: string;
}

export class TransactionDto {
    @ApiProperty({
        required: true
    })
    acceptance_token: string;

    @ApiProperty({
        required: true
    })
    amount_in_cents: number;

    @ApiProperty({
        required: true,
        default: "COP"
    })
    currency: string;

    @ApiProperty({
        required: true
    })
    customer_email: string;

    @ApiProperty({
        required: true,
        type: PaymentMethodDto
    })
    payment_method: PaymentMethodDto;

    @ApiProperty({
        required: true
    })
    payment_source_id: number;

    @ApiProperty({
        required: true
    })
    redirect_url: string;

    @ApiProperty({
        required: true
    })
    reference: string;

    @ApiProperty({
        required: true,
        type: CustomerData
    })
    customer_data: CustomerData;

    @ApiProperty({
        required: true
    })
    shipping_address: ShippingAndress
}