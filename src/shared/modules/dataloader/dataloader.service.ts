import { Injectable } from '@nestjs/common';
import * as Dataloader from 'dataloader';

import { IDataloaderArgs } from './models/dataloader-args.interface';
import { HumanService } from './../../../api/human/human.service';

@Injectable()
export class DataloaderService {
  constructor(private readonly humanService: HumanService) {}

  public createDataloader({
    findAll,
    filterBy,
  }: IDataloaderArgs): Dataloader<number, any[]> {
    return new Dataloader(async (keys: number[]) => {
      const response = await findAll(keys);

      return keys.map((value: number) =>
        response.filter((row: any) => row[filterBy] === value),
      );
    });
  }

  public getDataloader = () => {
    return {
      humanDataloader: this.createDataloader({
        findAll: this.humanService.batch,
        filterBy: 'id',
      }),
    };
  };
}
