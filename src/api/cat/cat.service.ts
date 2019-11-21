import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { Cat } from './model/cat';
import { CatArgs } from './dto/cat.args';

@Injectable()
export class CatService {
  private readonly cats: Cat[];

  constructor() {
    this.cats = [
      { id: '1', name: 'Mike' },
      { id: '2', name: 'Charlie' },
    ];
  }

  async findAll(catArgs: CatArgs): Promise<Cat[]> {
    return await this.cats;
  }

  async create(data: CreateCatInput): Promise<Cat> {
    const newCat: Cat = { id: (this.cats.length + 1).toString(), ...data };
    this.cats.push(newCat);
    return await newCat;
  }

  async findOneById(id: string): Promise<Cat> {
    return await this.cats.find(cat => cat.id === id);
  }

  async remove(id: string): Promise<boolean> {
    const position = this.cats.findIndex(cat => cat.id === id);
    if (position) {
      this.cats.splice(position, 1);
      return await true;
    }
    return await false;
  }
}
