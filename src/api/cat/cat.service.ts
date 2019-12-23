import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCatInput } from './dto/create-cat.input';
import { Cat } from './model/cat';
import { Cat as CatEntity } from '../../shared/datasource/cat.entity';
import { CatArgs } from './dto/cat.args';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  private readonly cats: Cat[];

  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {
    this.cats = [
      { id: 1, name: 'Mike', humanId: null },
      { id: 2, name: 'Charlie', humanId: null },
    ];
  }

  public batch = async (keys: number[]) => {
    return this.catRepository.findByIds(keys);
  };

  public findAll = async (catArgs: CatArgs): Promise<Cat[]> => {
    return await this.catRepository.find();
  };

  public create = async (data: CreateCatInput): Promise<Cat> => {
    const newCat: Cat = { id: this.cats.length + 1, ...data, humanId: null };
    this.cats.push(newCat);
    return await newCat;
  };

  public findOneById = async (id: number): Promise<Cat> => {
    return await this.cats.find(cat => cat.id === id);
  };

  public remove = async (id: number): Promise<boolean> => {
    const position = this.cats.findIndex(cat => cat.id === id);
    if (position) {
      this.cats.splice(position, 1);
      return await true;
    }
    return await false;
  };
}
