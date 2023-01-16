/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { UserDto } from 'src/db/dto/user/user.dto';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {

    constructor(private readonly riderService: RiderService) {}

    @Get()
    async getRiders(): Promise<UserDto[]> {
        return await this.riderService.getRiders();
    }

    @Post()
    savePaymentMethod(@Req() request: SavePaymentDto) {
        


    }


}
