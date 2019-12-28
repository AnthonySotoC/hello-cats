import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Human } from '@datasource/models/human.entity';
import { HumanResolver } from './human.resolver';
import { HumanService } from './human.service';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  providers: [HumanResolver, HumanService],
  exports: [HumanService],
})
export class HumanModule {}
