import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { FinishTravelDto } from 'src/db/dto/user/FinishTravel.dto';
import { UserTransportationsMapper } from 'src/db/repository/user/mapper/user-transportations.mapper';
import { UserMapper } from 'src/db/repository/user/mapper/user.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';

@Injectable()
export class DriverService {
    constructor(
        private userRepoService: UserRepositoryService,
        private mapper: UserMapper,
        private mapperUserTransportation: UserTransportationsMapper
    ) {}

    async getDrivers(){
        return await this.userRepoService.getAllUserIsDriver();
    }

    async finishTravel(body: FinishTravelDto) {

        const travel = await this.userRepoService.findTravel(body.id);

        if(travel) {
            const totalByMinutes = body.minutes_traveled * 200;
            const totalByKilometers = body.kilometers_traveled * 1000;
            const total_amount = totalByMinutes + totalByKilometers + body.base_rate;

            body.total_amount = total_amount;

            await this.userRepoService.finishTravel(body);

            return await body;

        } else {
            throw new Error("Travel not exist.");
        }
      
    }
    
}
