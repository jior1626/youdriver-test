import { ApiProperty } from "@nestjs/swagger";

export class FinishTravelDto {

    @ApiProperty({
        required: true
    })
    id: number;

    @ApiProperty({
        required: true
    })
    kilometers_traveled: number;
    
    @ApiProperty({
        required: true
    })
    minutes_traveled: number;
    
    @ApiProperty({
        required: true
    })
    status: string;
    
    @ApiProperty({
        required: true
    })
    base_rate: number;
    
    @ApiProperty({
        required: true
    })
    destiny: string;

    @ApiProperty({
        required: false,
        default: 0
    })
    total_amount: number;

}