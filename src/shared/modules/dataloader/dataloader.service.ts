import * as Dataloader from 'dataloader';
import { Injectable } from '@nestjs/common';

import { IDataloaderArgs } from './models/dataloader-args.interface';
import { IDataloader } from './models/dataloader.interface';

import { Cat } from './../../datasource/models/cat.entity';
import { CatService } from './../../../api/cat/cat.service';

import { Human } from '../../datasource/models/human.entity';
import { HumanService } from './../../../api/human/human.service';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly catService: CatService,
    readonly humanService: HumanService,
  ) {}

  public createDataloader<T>({
    findAll,
    filterBy,
  }: IDataloaderArgs<T>): Dataloader<number, any[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) =>
        response.filter((row: any) => row[filterBy] === value),
      );
    });
  }

  public getDataloader = (): IDataloader => {
    return {
      catDataloader: this.createDataloader<Cat>({
        findAll: this.catService.batch,
        filterBy: 'humanId',
      }),
      humanDataloader: this.createDataloader<Human>({
        findAll: this.humanService.batch,
        filterBy: 'id',
      }),
    };
  };
}