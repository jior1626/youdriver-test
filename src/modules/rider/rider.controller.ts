/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Response, HttpStatus, HttpException } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common/services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { UserDto } from 'src/db/dto/user/user.dto';
import { RiderService } from './rider.service';

@ApiTags('/api/riders')
@Controller('/api/riders')
export class RiderController {

    constructor(private readonly riderService: RiderService) {}

    @Get('list')
    @ApiResponse({ status: 200, description: 'The record has been successfully list.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async getRiders(@Response() res) {
        try {
            const result = await this.riderService.getRiders();
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

    @Post('create-token/cards')
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createPaymentMethod(@Response() res, @Body() request: SavePaymentDto) {
        try {
            const result = await this.riderService.createPaymentMethod(request);
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
