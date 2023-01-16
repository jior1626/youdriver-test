/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WompiService {
    
    constructor(private readonly httpService: HttpService) {}

    async createMethodPaymentByCard(body: any) {
        const server = process.env.WOMPI_HOST;
        return await this.httpService.post(`${server}/tokens/cards`, body);
    }
}
