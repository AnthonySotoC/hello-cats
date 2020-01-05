import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Breed as BreedEntity } from '@datasource/database/model/breed.entity';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(BreedEntity)
    private readonly breedRepository: Repository<BreedEntity>,
  ) {}

  public batch = async (breedKeys: number[]) => {
    return this.breedRepository.findByIds(breedKeys);
  };
}
