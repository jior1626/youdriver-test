import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from 'src/db/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature(
        [AppUser]
    )],
    controllers: [
        RiderController,],
    providers: [
        RiderService,],
})
export class RiderModule { }
