import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Human } from './human.entity';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  humanId?: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(() => Human, human => human.cats, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'humanId' })
  human: Human;
}
