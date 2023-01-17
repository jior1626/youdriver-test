import { ApiProperty } from "@nestjs/swagger";

export class MessageResponse {
    @ApiProperty()
    status: string;
    @ApiProperty()
    message: string;
    @ApiProperty()
    data: any
}