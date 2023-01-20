import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    type_document: string;

    @ApiProperty()
    document: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    address1?: string;

    @ApiProperty({
        required: false
    })
    address2?: string;

    @ApiProperty()
    country?: string;

    @ApiProperty()
    region?: string;

    @ApiProperty()
    city?: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;
    
}