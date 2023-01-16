import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity("app_user_method_payment")
export class MethodPaymentEntity {
    
	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

    @ManyToOne(type => UserEntity, user => user.methodPayments)
    user: UserEntity;

	@Column({
		name: 'type',
		nullable: false,
		default: '',
	})
	type: string;

	@Column({
		name: 'phone_number',
		nullable: true,
		default: '',
	})
	phone_number: string;

	@Column({
		name: 'number_card',
		nullable: true,
		default: '',
	})
	number_card: string;

    @Column({
		name: 'exp_month',
		nullable: true,
		default: '',
	})
	exp_month: string;

    @Column({
		name: 'exp_year',
		nullable: true,
		default: '',
	})
	exp_year: string;

    @Column({
		name: 'cvc',
		nullable: true,
		default: '',
	})
	cvc: string;

    @Column({
		name: 'token',
		nullable: false,
		default: '',
	})
	token: string;


    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

	// constructor(id: number, type: string, phone_number: string, number_card: string, exp_month: string, exp_year: string, cvc: string) {
	// 	this.id = id;
	// 	this.type = type;
	// 	this.phone_number = phone_number;
	// 	this.number_card = number_card;
	// 	this.exp_month = exp_month;
	// 	console.log('Created User Entity to ' + this.username);
	// }
}