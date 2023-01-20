import { Injectable } from "@nestjs/common";
import { TakeCarDto } from "src/db/dto/user/TakeCar.dto";
import { UserEntity } from "src/db/entities/user.entity";
import { UsersTransportationsEntity } from "src/db/entities/users-transportations.entity";

@Injectable()
export class UserTransportationsMapper {

    UserTransportationEntityToTakeCarDto(usersTransportationsEntity: UsersTransportationsEntity):  TakeCarDto {
        let takeCardDto = new TakeCarDto();
        takeCardDto.id = usersTransportationsEntity.id;
        takeCardDto.driverId = usersTransportationsEntity.driver.id;
        takeCardDto.riderId = usersTransportationsEntity.rider.id;
        takeCardDto.latitude = usersTransportationsEntity.latitude;
        takeCardDto.longitude = usersTransportationsEntity.longitude;
        takeCardDto.kilometers_traveled = usersTransportationsEntity.kilometers_traveled;
        takeCardDto.minutes_traveled = usersTransportationsEntity.minutes_traveled;
        takeCardDto.status = usersTransportationsEntity.status;
        takeCardDto.base_rate = usersTransportationsEntity.base_rate;
        takeCardDto.total_amount = usersTransportationsEntity.total_amount;
        takeCardDto.destiny = usersTransportationsEntity.destiny;
        return takeCardDto;
    }

    TakeCarDtoToUserTransportationEntity(saveTakeCarDto: TakeCarDto, rider: UserEntity, driver: UserEntity): UsersTransportationsEntity {
        let usersTransportationsEntity = new UsersTransportationsEntity();
        usersTransportationsEntity.id = saveTakeCarDto.id;
        usersTransportationsEntity.driver = driver;
        usersTransportationsEntity.rider = rider;
        usersTransportationsEntity.latitude = saveTakeCarDto.latitude;
        usersTransportationsEntity.longitude = saveTakeCarDto.longitude;
        usersTransportationsEntity.kilometers_traveled = saveTakeCarDto.kilometers_traveled;
        usersTransportationsEntity.minutes_traveled = saveTakeCarDto.minutes_traveled;
        usersTransportationsEntity.status = saveTakeCarDto.status;
        usersTransportationsEntity.base_rate = saveTakeCarDto.base_rate;
        usersTransportationsEntity.total_amount = saveTakeCarDto.total_amount;
        usersTransportationsEntity.destiny = saveTakeCarDto.destiny;
        return usersTransportationsEntity;
    }

}