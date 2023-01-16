import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("app_user")
export class UserEntity {
	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

	@Column({
		nullable: false,
		default: '',
	})
	username: string;

	@Column({
		name: 'type',
		nullable: false,
		default: '',
	})
	type: string;

	@Column({
		name: 'email',
		nullable: false,
		default: '',
	})
	email: string;

	@Column({
		name: 'phone',
		nullable: false,
		default: '',
	})
	phone: string;

	constructor(id: number, username: string, type: string, email: string, phone: string) {
		this.id = id;
		this.username = username;
		this.type = type;
		this.email = email;
		this.phone = phone;
		console.log('Created User Entity to ' + this.username);
	}
}