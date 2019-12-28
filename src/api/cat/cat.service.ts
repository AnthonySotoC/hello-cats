import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Cat } from './model/cat';
import { CatArgs } from './dto/cat.args';
import { CreateCatInput } from './dto/create-cat.input';
import { Cat as CatEntity } from '@datasource/models/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  public batch = async (keys: number[]) => {
    return this.catRepository.findByIds(keys);
  };

  public findAll = async (catArgs: CatArgs): Promise<Cat[]> => {
    return await this.catRepository.find();
  };

  public create = async (data: CreateCatInput): Promise<Cat> => {
    return await this.catRepository.save({ ...data });
  };

  public findOneById = async (id: number): Promise<Cat> => {
    return await this.catRepository.findOne(id);
  };

  public remove = async (id: number): Promise<boolean> => {
    const response = await this.catRepository.delete({ id });
    return response.affected === 1;
  };
}
