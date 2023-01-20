/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios/dist';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable, Subscriber } from 'rxjs';
import { PaymentCardDto } from 'src/db/dto/payment/payment-card.dto';
import { SavePaymentSourceDto } from 'src/db/dto/payment/save-payment-source.dto';
import { PaymentSaveResponse } from 'src/db/dto/wompi/response-payment.dto';

@Injectable()
export class WompiService {
    
    constructor(private readonly httpService: HttpService) {}


    async getTokenMerchant() {
        const info = await this.getInfoMerchant().then(data => data);
        return await info.data.data.presigned_acceptance.acceptance_token;
    }

    getInfoMerchant(): Promise<AxiosResponse<any>>{
        const server = process.env.WOMPI_HOST;
        const publicKey = process.env.PUBLIC_KEY;
        return this.httpService.axiosRef.get(`${server}/merchants/${publicKey}`);
    }

    createMethodPaymentByCard(body: PaymentCardDto): Promise<AxiosResponse<PaymentSaveResponse>> {
        const server = process.env.WOMPI_HOST;
        return  this.httpService.axiosRef.post(`${server}/tokens/cards`, body, {
            headers: { Authorization: `Bearer ${process.env.PUBLIC_KEY}` },
        });
    }

    createPaymentSource(body: SavePaymentSourceDto): Promise<AxiosResponse<PaymentSaveResponse>> {
        const server = process.env.WOMPI_HOST;
        return  this.httpService.axiosRef.post(`${server}/payment_sources`, body, {
            headers: { Authorization: `Bearer ${process.env.PRIVATE_KEY}` },
        });
    }
}
