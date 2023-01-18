import { Injectable } from "@nestjs/common";
import { SaveTakeCardDto } from "src/db/dto/user/SaveTakeCard.dto";
import { UserEntity } from "src/db/entities/user.entity";
import { UsersTransportationsEntity } from "src/db/entities/users-transportations.entity";

@Injectable()
export class UserTransportationsMapper {

    UserTransportationEntityToUserTransportationDto(usersTransportationsEntity: UsersTransportationsEntity):  SaveTakeCardDto {
        let takeCardDto = new SaveTakeCardDto();
        takeCardDto.id = usersTransportationsEntity.id;
        takeCardDto.driverId = usersTransportationsEntity.driver.id;
        takeCardDto.riderId = usersTransportationsEntity.rider.id;
        takeCardDto.latitude = usersTransportationsEntity.latitude;
        takeCardDto.longitude = usersTransportationsEntity.longitude;
        takeCardDto.kilometers_traveled = usersTransportationsEntity.kilometers_traveled;
        takeCardDto.minutes_traveled = usersTransportationsEntity.minutes_traveled;
        takeCardDto.status = usersTransportationsEntity.status;
        takeCardDto.base_rate = usersTransportationsEntity.base_rate;
        return takeCardDto;
    }

    UserTransportationDtoToUserTransportationEntity(saveTakeCardDto: SaveTakeCardDto, rider: UserEntity, driver: UserEntity): UsersTransportationsEntity {
        let usersTransportationsEntity = new UsersTransportationsEntity();
        usersTransportationsEntity.id = saveTakeCardDto.id;
        usersTransportationsEntity.driver = driver;
        usersTransportationsEntity.rider = rider;
        usersTransportationsEntity.latitude = saveTakeCardDto.latitude;
        usersTransportationsEntity.longitude = saveTakeCardDto.longitude;
        usersTransportationsEntity.kilometers_traveled = saveTakeCardDto.kilometers_traveled;
        usersTransportationsEntity.minutes_traveled = saveTakeCardDto.minutes_traveled;
        usersTransportationsEntity.status = saveTakeCardDto.status;
        usersTransportationsEntity.base_rate = saveTakeCardDto.base_rate;
        return usersTransportationsEntity;
    }

}