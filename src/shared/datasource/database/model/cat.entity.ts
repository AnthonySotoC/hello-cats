import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CatHuman } from './cat-human.entity';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany(type => CatHuman, catHuman => catHuman.cat)
  catsHumans!: CatHuman[];
}
