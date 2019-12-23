import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Human } from './model/human';
import { Human as HumanEntity } from '../../shared/datasource/human.entity';

@Injectable()
export class HumanService {
  private readonly humans: Human[];

  constructor(
    @InjectRepository(HumanEntity)
    private readonly humanRepository: Repository<HumanEntity>,
  ) {
    this.humans = [
      {
        id: '1',
        firstName: 'Kamil',
        lastName: 'Mysliwiec',
      },
    ];
  }

  public batch = async (keys: number[]): Promise<Human[]> => {
    // TODO Change the any type
    return (await this.humanRepository.findByIds(keys)) as any;
  };

  public findOneById = async (id: string): Promise<Human> => {
    return await this.humans.find(human => human.id === id);
  };

  public findAll = async (humanArgs: any): Promise<Human[]> => {
    return await this.humans;
  };
}
