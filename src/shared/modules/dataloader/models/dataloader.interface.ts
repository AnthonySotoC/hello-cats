import * as Dataloader from 'dataloader';

import { Cat } from './../../../datasource/models/cat.entity';
import { Human } from '../../../datasource/models/human.entity';

export interface IDataloader {
  catDataloader: Dataloader<number, Cat[]>;
  humanDataloader: Dataloader<number, Human[]>;
}
