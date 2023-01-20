import { ApiProperty } from "@nestjs/swagger";

export class TakeCarDto {
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
    kilometers_traveled: number;

    @ApiProperty({
        required: false,
        default: "0"
    })
    minutes_traveled: number;

    @ApiProperty({
        required: false,
        default: 3500
    })
    base_rate: number;

    @ApiProperty({
        required: false
    })
    total_amount: number;

    @ApiProperty({
        required: false
    })
    destiny: string;

}