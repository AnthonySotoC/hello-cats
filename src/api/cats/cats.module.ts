import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { HumansService } from '../humans/humans.service';

@Module({
  providers: [CatsResolver, CatsService, HumansService],
})
export class CatsModule {}
