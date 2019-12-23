import { Injectable } from '@nestjs/common';
import * as Dataloader from 'dataloader';

import { IDataloaderArgs } from './models/dataloader-args.interface';
import { IDataloader } from './models/dataloader.interface';

import { CatService } from './../../../api/cat/cat.service';
import { HumanService } from './../../../api/human/human.service';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly catService: CatService,
    readonly humanService: HumanService,
  ) {}

  public createDataloader({
    findAll,
    filterBy,
  }: // TODO TYPE THIS WITH THE ENTITY ATTRIBUTES
  IDataloaderArgs): Dataloader<number, any[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) =>
        response.filter((row: any) => row[filterBy] === value),
      );
    });
  }

  public getDataloader = (): IDataloader => {
    return {
      catDataloader: this.createDataloader({
        findAll: this.catService.batch,
        filterBy: 'humanId',
      }),
      humanDataloader: this.createDataloader({
        findAll: this.humanService.batch,
        filterBy: 'id',
      }),
    };
  };
}
