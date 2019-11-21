import { Module } from '@nestjs/common';
import { HumanResolver } from './human.resolver';
import { HumanService } from './human.service';

@Module({
  providers: [HumanResolver, HumanService],
})
export class HumanModule {}
