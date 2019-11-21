import { Injectable } from '@nestjs/common';
import { Human } from './model/human';

@Injectable()
export class HumanService {
  private readonly humans: Human[];

  constructor() {
    this.humans = [
      {
        id: '1',
        firstName: 'Kamil',
        lastName: 'Mysliwiec',
      },
      {
        id: '2',
        firstName: 'Anthony',
        lastName: 'Soto',
      },
    ];
  }

  async findOneById(id: string): Promise<Human> {
    return await this.humans.find(human => human.id === id);
  }

  async findAll(humanArgs: any): Promise<Human[]> {
    return await this.humans;
  }
}
