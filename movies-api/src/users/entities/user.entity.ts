import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public phoneNumber?: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;

}

export default User;