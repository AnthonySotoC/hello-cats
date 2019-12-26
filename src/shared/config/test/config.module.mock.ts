import { Test } from '@nestjs/testing';

import { ConfigService } from './../config.service';

export default Test.createTestingModule({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
    },
  ],
});
