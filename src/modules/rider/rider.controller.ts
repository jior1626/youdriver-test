/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {

    constructor(private readonly riderService: RiderService) {}

    @Get()
    getHello(): string {
        return this.riderService.getHello();
    }

    @Post()
    savePaymentMethod(@Req() request: PaymentRequest) {
        


    }


}
