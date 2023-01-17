/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios/dist';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable, Subscriber } from 'rxjs';
import { PaymentCardDto } from 'src/db/dto/payment/payment-card.dto';
import { PaymentSaveResponse } from 'src/db/dto/wompi/response-payment.dto';

@Injectable()
export class WompiService {
    
    constructor(private readonly httpService: HttpService) {}

    createMethodPaymentByCard(body: PaymentCardDto): Promise<AxiosResponse<PaymentSaveResponse>> {
        const server = process.env.WOMPI_HOST;
        return  this.httpService.axiosRef.post(`${server}/tokens/cards`, body, {
            headers: { Authorization: `Bearer ${process.env.PUBLIC_KEY}` },
        });
    }
}
