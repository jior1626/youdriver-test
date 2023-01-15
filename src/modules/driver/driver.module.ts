import { DriverController } from './driver.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverService } from './driver.service';
import { AppUser } from 'src/db/entities/user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature(
        [AppUser]
    )],
    controllers: [
        DriverController,],
    providers: [
        DriverService
    ],
})
export class DriverModule { }
