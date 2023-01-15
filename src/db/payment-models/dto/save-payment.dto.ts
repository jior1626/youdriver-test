export class SavePaymentDto {
    client: {
        name: string
    };
    payment_card: {
        number: string,
        cvc: string,
        exp_month: string,
        exp_year: string,
        card_holder: string
    }
}