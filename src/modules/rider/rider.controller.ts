/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Response, HttpStatus, HttpException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TakeCarDto } from 'src/db/dto/user/TakeCar.dto';
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

    @Post('take-car')
    async takeCard(@Body() body: TakeCarDto, @Response() res){
        try {
            const result = await this.riderService.saveTakeCard(body);
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
