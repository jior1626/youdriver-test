/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Body, Response, Get, Post, HttpStatus, HttpException } from '@nestjs/common';
import { FinishTravelDto } from 'src/db/dto/user/FinishTravel.dto';
import { DriverService } from './driver.service';

@Controller('/api/drivers')
export class DriverController {

    constructor(private readonly driverService: DriverService) {}

    @Get('list')
    async getDrivers(@Response() res) {
        try {
            const result = await this.driverService.getDrivers();
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

    @Post('finish-travel')
    async finishTravel(@Body() body: FinishTravelDto, @Response() res) {
        try {
            const result = await this.driverService.finishTravel(body)
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
