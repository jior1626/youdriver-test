import { PaymentCardDto } from "./payment-card.dto";


class PaymentMethod {
    
}

export class SaveTransactionDto {
    user_id: number;
    payment_method: PaymentCardDto;
    transportation_id: number;
    total_amount: number
}