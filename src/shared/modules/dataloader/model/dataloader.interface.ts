import * as Dataloader from 'dataloader';

import { Cat } from '../../../datasource/model/cat.entity';
import { Human } from '../../../datasource/model/human.entity';

export interface IDataloader {
  catDataloader: Dataloader<number, Cat[]>;
  humanDataloader: Dataloader<number, Human[]>;
}
