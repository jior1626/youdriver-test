import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppUser {
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
}