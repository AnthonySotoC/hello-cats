import { Injectable } from '@nestjs/common';
import { Human } from './model/human';

@Injectable()
export class HumansService {
  private readonly humans: Human[];

  constructor() {
    this.humans = [
      { 
        id: '1', 
        firstName: 'Joel', 
        lastName: 'Alvarez' 
      },
      { 
        id: '2', 
        firstName: 'Jeffry', 
        lastName: 'Venegas' 
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
