/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {

    constructor(private readonly driverService: DriverService) {}

    @Get()
    getUsersIsDriver(): string {
        return "this.driverService.getHello()";
    }
}
