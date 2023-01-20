import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PaymentSourcesEntity } from './payment-source.entity';
import { UserEntity } from './user.entity';

@Entity("app_user_method_payment")
export class MethodPaymentEntity {

	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

	@ManyToOne(() => UserEntity, (user: UserEntity) => user.methodPayments)
    user: UserEntity;

	@Column({
		name: 'number_card',
		nullable: false,
		default: '',
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

	@OneToOne(() => UserEntity, (user: UserEntity) => user.methodPayments)
    paymentSource: PaymentSourcesEntity;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}