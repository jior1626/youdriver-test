import { ApiProperty } from "@nestjs/swagger";

export class SaveTakeCardDto {
    @ApiProperty({
        required: false
    })
    id?: number;

    @ApiProperty({
        required: false
    })
    driverId: number;

    @ApiProperty()
    riderId: number;

    @ApiProperty()
    latitude: string;

    @ApiProperty()
    longitude: string;

    @ApiProperty()
    status: string;

    @ApiProperty({
        required: false,
        default: "0"
    })
    kilometers_traveled: string;

    @ApiProperty({
        required: false,
        default: "0"
    })
    minutes_traveled: string;

    @ApiProperty({
        required: false,
        default: "0"
    })
    base_rate: string;

}