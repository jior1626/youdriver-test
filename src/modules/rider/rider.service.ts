import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { PaymentCardDto } from 'src/db/dto/payment/payment-card.dto';
import { SavePaymentDto } from 'src/db/dto/payment/save-payment.dto';
import { SaveTakeCardDto } from 'src/db/dto/user/SaveTakeCard.dto';
import { UserDto } from 'src/db/dto/user/User.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { MethodPaymentCardMapper } from 'src/db/repository/payment/mapper/payment-method.mapper';
import { PaymentRepositoryService } from 'src/db/repository/payment/payment-repository.service';
import { UserTransportationsMapper } from 'src/db/repository/user/mapper/user-transportations.mapper';
import { UserMapper } from 'src/db/repository/user/mapper/user.mapper';
import { UserRepositoryService } from 'src/db/repository/user/user-repository.service';
import { WompiService } from '../wompi/wompi.service';

@Injectable()
export class RiderService { 

    constructor(
        private userRepoService: UserRepositoryService,
        private userTransportationsMapper: UserTransportationsMapper
    ) {}

    async getRiders() {
        return await this.userRepoService.getAllUserIsRider();
    }

    async saveTakeCard(body: SaveTakeCardDto) {

        const driverRandom = await this.userRepoService.getRandomUserDriver();

        body.driverId = driverRandom.id;

        const driver = await this.userRepoService.findUserById(body.driverId);

        const rider = await this.userRepoService.findUserById(body.riderId);

        const userTransportationEntity = await this.userTransportationsMapper.UserTransportationDtoToUserTransportationEntity(body, rider, driver)

        body.status = "start";

        Logger.log(body, "body")

        await this.userRepoService.saveTakeCard(userTransportationEntity);
    
    }
}
