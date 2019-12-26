import { getRepositoryToken } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';

import { Human } from './../../../shared/datasource/models/human.entity';
import { HumanResolver } from './../human.resolver';
import { HumanService } from '../human.service';

export default Test.createTestingModule({
  providers: [
    HumanResolver,
    HumanService,
    {
      provide: getRepositoryToken(Human),
      useValue: {},
    },
  ],
  exports: [HumanService],
});
