import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/db/user-models/entity/User.entity';

@Module({
    imports: [TypeOrmModule.forFeature(
        [User]
    )],
    controllers: [
        RiderController,],
    providers: [
        RiderService,],
})
export class RiderModule { }
