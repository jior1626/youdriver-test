import { Injectable } from "@nestjs/common";
import { UserDto } from "src/db/dto/user/user.dto";
import { UserEntity } from "src/db/entities/user.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDto: UserDto): UserEntity {
        return new UserEntity(userDto.id, userDto.username, userDto.type, userDto.email, userDto.phone);
    }

    entityToDto(userEntity: UserEntity): UserDto {
        return new UserDto(userEntity.id, userEntity.username, userEntity.type, userEntity.email, userEntity.phone);
    }

}