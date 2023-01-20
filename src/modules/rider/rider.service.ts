import { Injectable } from '@nestjs/common';
import { TakeCarDto } from 'src/db/dto/user/TakeCar.dto';
import { UserTransportationsMapper } from 'src/db/repository/user/mapper/user-transportations.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';

@Injectable()
export class RiderService { 

    constructor(
        private userRepoService: UserRepositoryService,
        private userTransportationsMapper: UserTransportationsMapper
    ) {}

    async getRiders() {
        return await this.userRepoService.getAllUserIsRider();
    }

    async saveTakeCard(body: TakeCarDto) {

        const driverRandom = await this.userRepoService.getRandomUserDriver();

        body.driverId = driverRandom.id;

        body.status = "start";

        const driver = await this.userRepoService.findUserById(body.driverId);

        const rider = await this.userRepoService.findUserById(body.riderId);

        const userTransportationEntity = await this.userTransportationsMapper.TakeCarDtoToUserTransportationEntity(body, rider, driver)

        return await this.userRepoService.saveTakeCard(userTransportationEntity);
    
    }
}
