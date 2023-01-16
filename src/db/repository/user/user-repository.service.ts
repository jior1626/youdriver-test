/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/db/dto/user/user.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { UserMapper } from './mapper/user.mapper';

@Injectable()
export class UserRepositoryService { 

    constructor(
        @InjectRepository(UserEntity)     
        private usersRepository: Repository<UserEntity>,
        private mapper: UserMapper
    ){}

    getAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    getAllUserIsDriver(): Promise<UserEntity[]> {
        return this.usersRepository.findBy({type: "driver"});
    }

    getAllUserIsRider(): Promise<UserEntity[]> {
        return this.usersRepository.findBy({type: "rider"});
    }

    findUserById(id): Promise<UserEntity> {
        return this.usersRepository.findOneByOrFail({id: id});
    }

    createUser(userDto: UserDto): Promise<UserEntity> {
        const newUser = this.mapper.dtoToEntity(userDto);
        return this.usersRepository.save(newUser);
    }
}
