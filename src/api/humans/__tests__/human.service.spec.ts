import { Test, TestingModule } from '@nestjs/testing';
import { HumansService } from '../humans.service';

describe('HumanService', () => {
  let service: HumansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumansService],
    }).compile();

    service = module.get<HumansService>(HumansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
