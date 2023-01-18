/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Response, HttpStatus, HttpException, Param } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common/services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { UserDto } from 'src/db/dto/user/User.dto';
import { PaymentService } from './payment.service';

@ApiTags('/api/payments')
@Controller('/api/payments')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {}

    @Get('/sources/:id')
    @ApiResponse({ status: 200, description: 'The record has been successfully list.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getPaymentSource(@Param('id') id: any , @Response() res) {
        try {
            const result = await this.paymentService.getPaymentSource(id);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new HttpException(
                {
                  status: HttpStatus.FORBIDDEN,
                  error: error.message,
                },
                HttpStatus.FORBIDDEN,
            );
        }
    }

    @Post('/sources/create')
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createPaymentSource(@Response() res, @Body() request: SavePaymentDto) {
        try {
            const result = await this.paymentService.createPaymentMethod(request);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new HttpException(
                {
                  status: HttpStatus.FORBIDDEN,
                  error: error.message,
                },
                HttpStatus.FORBIDDEN,
            );
        }
    }

    @Post('/tokens/cards')
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createPaymentMethod(@Response() res, @Body() request: SavePaymentDto) {
        try {
            const result = await this.paymentService.createPaymentMethod(request);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new HttpException(
                {
                  status: HttpStatus.FORBIDDEN,
                  error: error.message,
                },
                HttpStatus.FORBIDDEN,
            );
        }
    }

}
