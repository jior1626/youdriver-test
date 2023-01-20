import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MethodPaymentEntity } from './payment.entity';
import { UserEntity } from './user.entity';

@Entity("app_user_payment_sources")
export class PaymentSourcesEntity {

	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

	@OneToOne(() => MethodPaymentEntity, (payment: MethodPaymentEntity) => payment.paymentSource)
    payment: MethodPaymentEntity;

    @Column({
		name: 'acceptance_token',
		nullable: false,
		default: '',
	})
	acceptance_token: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}