import { UserRepositoryService } from './user-repository.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserMapper } from './mapper/user.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { UsersTransportationsEntity } from 'src/db/entities/users-transportations.entity';
import { UserTransportationsMapper } from './mapper/user-transportations.mapper';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, UsersTransportationsEntity])
    ],
    controllers: [],
    providers: [
        UserMapper,
        UserTransportationsMapper,
        UserRepositoryService,
    ],
    exports:[
        UserMapper,
        UserRepositoryService,
        UserTransportationsMapper,
    ]
})
export class UserRepositoryModule { }
