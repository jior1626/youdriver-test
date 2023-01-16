import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()

    id?: number;

    @ApiProperty()
    username: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    // constructor(id: number, username: string, type: string, email: string, phone: string) {
    //     this.id = id;
	// 	this.username = username;
	// 	this.type = type;
	// 	this.email = email;
	// 	this.phone = phone;
	// 	console.log('Created User Dto to ' + this.username);
    // }
}