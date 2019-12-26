import { getRepositoryToken } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';

import { Cat } from '../../../shared/datasource/models/cat.entity';
import { CatService } from '../cat.service';
import { CatResolver } from '../cat.resolver';

export default Test.createTestingModule({
  providers: [
    CatResolver,
    CatService,
    {
      provide: getRepositoryToken(Cat),
      useValue: {},
    },
  ],
  exports: [CatService],
});
