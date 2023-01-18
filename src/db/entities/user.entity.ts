import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MethodPaymentEntity } from './payment.entity';
import { UsersTransportationsEntity } from './users-transportations.entity';

@Entity("app_user")
export class UserEntity {

	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

	@OneToMany(() => MethodPaymentEntity, (methodPayment: MethodPaymentEntity) => methodPayment.user)
	methodPayments: MethodPaymentEntity[]

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

	@OneToMany(() => UsersTransportationsEntity, (methodPayment: UsersTransportationsEntity) => methodPayment.rider)
	riders_transportations: UsersTransportationsEntity[]

	@OneToMany(() => UsersTransportationsEntity, (methodPayment: UsersTransportationsEntity) => methodPayment.driver)
	drivers_transportation: UsersTransportationsEntity[]

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	lastChangedDateTime: Date;

	// constructor(id: number, username: string, type: string, email: string, phone: string) {
	// 	this.id = id;
	// 	this.username = username;
	// 	this.type = type;
	// 	this.email = email;
	// 	this.phone = phone;
	// 	console.log('Created User Entity to ' + this.username);
	// }
}