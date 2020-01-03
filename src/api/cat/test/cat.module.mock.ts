import { getRepositoryToken } from '@nestjs/typeorm';
import { Reflector } from '@nestjs/core';
import { Test } from '@nestjs/testing';

import { Cat } from '@shared/datasource/database/model/cat.entity';
import { CatService } from '@api/cat/cat.service';
import { CatResolver } from '@api/cat/cat.resolver';
import { ConfigService } from '@shared/config/config.service';

export default Test.createTestingModule({
  imports: [Reflector],
  providers: [
    CatResolver,
    CatService,
    {
      provide: getRepositoryToken(Cat),
      useValue: {},
    },
    {
      provide: ConfigService,
      useValue: new ConfigService('.env.development'),
    },
  ],
  exports: [CatService],
});
