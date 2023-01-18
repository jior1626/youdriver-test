import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity("app_user_payment_sources")
export class PaymentSourcesEntity {

	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

	@ManyToOne(() => UserEntity, (user: UserEntity) => user.methodPayments)
	@JoinColumn({name: 'user_id'})
    user: UserEntity;

	@Column({
		name: 'number_card',
		nullable: false,
		default: '',
		unique: true,
	})
	number_card: string;

    @Column({
		name: 'exp_month',
		nullable: false,
		default: '',
	})
	exp_month: string;

    @Column({
		name: 'exp_year',
		nullable: false,
		default: '',
	})
	exp_year: string;

    @Column({
		name: 'cvc',
		nullable: false,
		default: '',
	})
	cvc: string;

    @Column({
		name: 'token',
		nullable: true,
		default: '',
	})
	token: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}