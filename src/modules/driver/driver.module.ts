import { DriverController } from './driver.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { UserRepositoryModule } from 'src/db/repository/user/user-repository.module';

@Module({
    imports: [
        UserRepositoryModule
    ],
    controllers: [
        DriverController
    ],
    providers: [
        DriverService
    ],
})
export class DriverModule { }
