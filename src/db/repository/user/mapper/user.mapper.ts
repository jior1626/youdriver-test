import { Injectable } from "@nestjs/common";
import { UserDto } from "src/db/dto/user/user.dto";
import { UserEntity } from "src/db/entities/user.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDto: UserDto): UserEntity {
        let userEntity = new UserEntity();
        userEntity.id = userDto.id;
        userEntity.username = userDto.username;
        userEntity.type = userDto.type;
        userEntity.email = userDto.email;
        userEntity.phone = userDto.phone
        return userEntity;
    }

    entityToDto(userEntity: UserEntity): UserDto {
        let userDto: UserDto = new UserDto();
        userDto.id = userEntity.id;
        userDto.username = userEntity.username;
        userDto.type = userEntity.type;
        userDto.email = userEntity.email;
        userDto.phone = userEntity.phone
        return userDto;
    }

}