import * as Dataloader from 'dataloader';
import { Injectable } from '@nestjs/common';

import { IDataloaderArgs } from './model/dataloader-args.interface';
import { IDataloader } from './model/dataloader.interface';

import { Cat } from '@shared/datasource/database/model/cat.entity';
import { CatService } from '@api/cat/cat.service';

import { Human } from '@shared/datasource/database/model/human.entity';
import { HumanService } from '@api/human/human.service';

@Injectable()
export class DataloaderService {
  constructor(private readonly catService: CatService, readonly humanService: HumanService) {}

  public createDataloader<T>({ findAll, filterBy }: IDataloaderArgs<T>): Dataloader<number, any[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) => response.filter((row: any) => row[filterBy] === value));
    });
  }

  public getDataloader = (): IDataloader => ({
    humanCatsDataloader: this.createDataloader<Cat>({
      findAll: this.catService.batch,
      filterBy: 'humanId',
    }),
    catHumanDataloader: this.createDataloader<Human>({
      findAll: this.humanService.batch,
      filterBy: 'id',
    }),
  });
}
