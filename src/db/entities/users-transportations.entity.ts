import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("app_users_transportation")
export class UsersTransportationsEntity {
    
    @PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
	})
	id: number;

    @ManyToOne(item => UserEntity, (user: UserEntity) => user.id)
    driver: UserEntity;

    @ManyToOne(item => UserEntity, (user: UserEntity) => user.id)
    rider: UserEntity;

    @Column({
		nullable: false,
		default: '',
	})
    latitude: string;

    @Column({
		nullable: false,
		default: '',
	})
    longitude: string;

    @Column({
		nullable: false,
		default: '',
	})
    status: string;

    @Column({
		nullable: true,
		default: 0,
	})
    kilometers_traveled: number;

    @Column({
		nullable: true,
		default: 0,
	})
    minutes_traveled: number;

    @Column({
		nullable: true,
		default: 3500,
	})
    base_rate: number;

	@Column({
		nullable: true,
		default: '',
	})
    destiny: string;

	@Column({
		nullable: true,
		default: 0,
	})
    total_amount: number;

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	lastChangedDateTime: Date;

}