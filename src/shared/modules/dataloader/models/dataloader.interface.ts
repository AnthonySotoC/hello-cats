import * as Dataloader from 'dataloader';

import { Cat } from './../../../datasource/cat.entity';
import { Human } from './../../../datasource/human.entity';

export interface IDataloader {
  catDataloader: Dataloader<number, Cat[]>;
  humanDataloader: Dataloader<number, Human[]>;
}
