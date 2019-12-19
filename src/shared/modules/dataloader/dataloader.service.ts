import { Injectable } from '@nestjs/common';
import * as Dataloader from 'dataloader';

import { IDataloaderArgs } from './models/dataloader-args.interface';

@Injectable()
export class DataloaderService {
  public createDataloader({ findAll, filterBy }: IDataloaderArgs): Dataloader<number, any[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);
      return keys.map((value: number) => response.filter((row: any) => row[filterBy] === value));
    });
  }
}
