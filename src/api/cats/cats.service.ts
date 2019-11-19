import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { Cat } from './model/cat';
import { CatArgs } from './dto/cat.args';

@Injectable()
export class CatsService {
  private cats: Cat[];

  constructor() {
    this.cats = [
      { id: '1', name: 'Mike' },
      { id: '2', name: 'Charlie' },
    ];
  }

  create(data: CreateCatInput): Cat {
    const newCat: Cat = { id: (this.cats.length + 1).toString(), ...data };
    this.cats.push(newCat);
    return newCat;
  }

  findOneById(id: string): Cat {
    return this.cats.find(cat => cat.id === id);
  }

  findAll(catArgs: CatArgs): Cat[] {
    return this.cats;
  }

  remove(id: string): boolean {
    const position = this.cats.findIndex(cat => cat.id === id);
    if (position) {
      this.cats.splice(position, 1);
      return true;
    }
    return false;
  }
}
