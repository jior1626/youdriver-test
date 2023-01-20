/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinishTravelDto } from 'src/db/dto/user/FinishTravel.dto';
import { TakeCarDto } from 'src/db/dto/user/TakeCar.dto';
import { UserDto } from 'src/db/dto/user/User.dto';

import { UserEntity } from 'src/db/entities/user.entity';
import { UsersTransportationsEntity } from 'src/db/entities/users-transportations.entity';
import { Repository } from 'typeorm';
import { UserMapper } from './mapper/user.mapper';

@Injectable()
export class UserRepositoryService { 

    constructor(
        @InjectRepository(UserEntity)     
        private usersRepository: Repository<UserEntity>,
        @InjectRepository(UsersTransportationsEntity)     
        private usersTransportationRepository: Repository<UsersTransportationsEntity>,
    ){}

    getAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    getAllUserIsDriver(): Promise<UserEntity[]> {
        return this.usersRepository.findBy({type: "driver"});
    }

    getAllUserIsRider(): Promise<UserEntity[]> {
        return this.usersRepository.findBy({type: "rider", });
    }

    findUserById(id): Promise<UserEntity> {
        return this.usersRepository.findOneBy({id: id});
    }

    findUserByIdWithPayments(id): Promise<UserEntity> {
        return this.usersRepository.findOne({where: {id: id}, relations: ['methodPayments']});
    }

    findUserDriverByIdWithDrivers(id): Promise<UserEntity> {
        return this.usersRepository.findOne({where: {id: id, type: "driver"}, relations: ['drivers']});
    }

    findUserRiderByIdWithRiders(id): Promise<UserEntity> {
        return this.usersRepository.findOne({where: {id: id, type: "rider"}, relations: ['riders']});
    }

    createUser(data): Promise<UserEntity> {
        // const newUser = this.mapper.dtoToEntity(userDto);
        return this.usersRepository.save(data);
    }

    saveTakeCard(data: UsersTransportationsEntity) {
        return this.usersTransportationRepository.save(data);
    }

    findTravel(id) {
        return this.usersTransportationRepository.findOneBy({id: id});
    }

    finishTravel(data: FinishTravelDto){
        return this.usersTransportationRepository.update({id: data.id}, data);
    }

    async getRandomUserDriver(): Promise<UserEntity>  {
        const usersDrivers = await this.getAllUserIsDriver();
        const userRandomIndex = Math.floor(Math.random() * usersDrivers.length);
        return usersDrivers[userRandomIndex];
    }
}
