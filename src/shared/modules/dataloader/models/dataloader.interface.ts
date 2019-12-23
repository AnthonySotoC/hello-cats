import * as Dataloader from 'dataloader';

import { Human } from './../../../datasource/human.entity';

export interface IDataloader {
  humanDataloader: Dataloader<number, Human[]>;
}
