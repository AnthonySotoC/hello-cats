import { Injectable } from '@nestjs/common';
import { Human } from './model/human';

@Injectable()
export class HumansService {
  private humans: Human[];

  constructor() {
    this.humans = [
      { id: '1', firstName: 'Anthony', lastName: 'Soto' },
      { id: '2', firstName: 'Charlie', lastName: 'Sanchez' },
    ];
  }

  findOneById(id: string): Human {
    return this.humans.find(human => human.id === id);
  }

  findAll(humanArgs: any): Human[] {
    return this.humans;
  }
}
