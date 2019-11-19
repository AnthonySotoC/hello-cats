import { Module } from '@nestjs/common';
import { HumansResolver } from './humans.resolver';
import { HumansService } from './humans.service';

@Module({
  providers: [HumansResolver, HumansService],
})
export class HumansModule {}
