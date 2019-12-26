import { TestingModule } from '@nestjs/testing';

import HumanModule from './human.module.mock';
import { HumanService } from '../human.service';

describe('HumanService', () => {
  let service: HumanService;

  beforeEach(async () => {
    const module: TestingModule = await HumanModule.compile();

    service = module.get<HumanService>(HumanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
