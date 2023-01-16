/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { UserDto } from 'src/db/dto/user/user.dto';
import { DriverService } from './driver.service';

@Controller('/api/drivers')
export class DriverController {

    constructor(private readonly driverService: DriverService) {}

    @Get('list')
    async getDrivers(): Promise<UserDto[]> {
        return await this.driverService.getDrivers();
    }
}
