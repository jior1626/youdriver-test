import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/db/dto/user/user.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { UserMapper } from 'src/db/repository/user/mapper/user.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';

@Injectable()
export class RiderService { 

    constructor(
        private userRepoService: UserRepositoryService,
        private mapper: UserMapper
    ) {}

    async getRiders(): Promise<UserDto[]>{
        var users: UserEntity[] = await this.userRepoService.getAllUserIsRider();
        return users.map(user => this.mapper.entityToDto(user));
    }
}
