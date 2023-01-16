import { UserRepositoryService } from './user-repository.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserMapper } from './mapper/user.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [],
    providers: [
        UserMapper,
        UserRepositoryService,
    ],
    exports:[
        UserMapper,
        UserRepositoryService,
    ]
})
export class UserRepositoryModule { }
