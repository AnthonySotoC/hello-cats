import { Test, TestingModule } from '@nestjs/testing';
import { HumanResolver } from '../human.resolver';

describe('HumanResolver', () => {
  let resolver: HumanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumanResolver],
    }).compile();

    resolver = module.get<HumanResolver>(HumanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
