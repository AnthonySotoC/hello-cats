import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Cat } from './cat.entity';

@Entity()
export class Human {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;

  @OneToMany(() => Cat, cat => cat.human, {
    cascade: ['insert', 'update'],
  })
  cats: Cat[];
}
