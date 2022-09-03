import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Movie {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public gender: string;

  @Column()
  public director: string;
}
