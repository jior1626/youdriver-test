import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty()
    type_document: string;

    @ApiProperty()
    document: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;
}