import * as Dataloader from 'dataloader';

import { Cat } from '../../../datasource/database/model/cat.entity';
import { Human } from '../../../datasource/database/model/human.entity';

export interface IDataloader {
  humanCatsDataloader: Dataloader<number, Cat[]>;
  catHumanDataloader: Dataloader<number, Human[]>;
}
