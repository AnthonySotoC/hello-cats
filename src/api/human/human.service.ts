import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Human } from './model/human';
import { HumanArgs } from './dto/human.args';
import { CreateHumanInput } from './dto/create-human.input';
import { Human as HumanEntity } from '../../shared/datasource/models/human.entity';

@Injectable()
export class HumanService {
  constructor(
    @InjectRepository(HumanEntity)
    private readonly humanRepository: Repository<HumanEntity>,
  ) {}

  public batch = async (keys: number[]) => {
    return this.humanRepository.findByIds(keys);
  };

  public findAll = async (catArgs: HumanArgs): Promise<Human[]> => {
    return await this.humanRepository.find();
  };

  public create = async (data: CreateHumanInput): Promise<Human> => {
    return await this.humanRepository.save({ ...data });
  };

  public findOneById = async (id: number): Promise<Human> => {
    return await this.humanRepository.findOne(id);
  };

  public remove = async (id: number): Promise<boolean> => {
    const response = await this.humanRepository.delete({ id });
    return response.affected === 1;
  };
}
