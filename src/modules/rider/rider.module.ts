import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/db/repository/user/user-repository.module';

@Module({
    imports: [
        UserRepositoryModule
    ],
    controllers: [
        RiderController
    ],
    providers: [
        RiderService
    ],
})
export class RiderModule { }
