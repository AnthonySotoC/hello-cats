import { getRepositoryToken } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';

import { Human } from '@shared/datasource/model/human.entity';
import { HumanResolver } from '@api/human/human.resolver';
import { HumanService } from '@api/human/human.service';

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
