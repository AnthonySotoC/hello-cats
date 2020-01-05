import { BreedService } from './../../../api/breed/breed.service';
import * as Dataloader from 'dataloader';
import { Injectable } from '@nestjs/common';

import { IDataloaderArgs } from './model/dataloader-args.interface';
import { IDataloader } from './model/dataloader.interface';

import { Cat } from '@shared/datasource/database/model/cat.entity';
import { CatService } from '@api/cat/cat.service';

import { Human } from '@shared/datasource/database/model/human.entity';
import { HumanService } from '@api/human/human.service';
import { CatHuman } from '@shared/datasource/database/model/cat-human.entity';

import { Breed } from '@api/breed/model/breed';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly catService: CatService,
    private readonly humanService: HumanService,
    private readonly breedService: BreedService,
  ) {}

  public createOneToManyDataloader<T>({ findAll, filterBy }: IDataloaderArgs<T>): Dataloader<number, T[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) => response.filter((row: any) => row[filterBy] === value));
    });
  }

  public createManyToManyDataloader<T, K>({
    findAll,
    filterBy,
    resolvedProperty,
  }: IDataloaderArgs<T>): Dataloader<number, K[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) =>
        response.filter((row: any) => row[filterBy] === value).map((row: any) => row[resolvedProperty]),
      );
    });
  }

  public getDataloader = (): IDataloader => ({
    humanCatsDataloader: this.createManyToManyDataloader<CatHuman, Cat>({
      findAll: this.catService.batch,
      filterBy: 'humanId',
      resolvedProperty: 'cat',
    }),
    catHumanDataloader: this.createManyToManyDataloader<CatHuman, Human>({
      findAll: this.humanService.batch,
      filterBy: 'catId',
      resolvedProperty: 'human',
    }),
    catBreedDataloader: this.createOneToManyDataloader<Breed>({
      findAll: this.breedService.batch,
      filterBy: 'id',
    }),
  });
}
