import { getRepositoryToken } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';

import { Cat } from '@shared/datasource/model/cat.entity';
import { CatService } from '@api/cat/cat.service';
import { CatResolver } from '@api/cat/cat.resolver';

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
