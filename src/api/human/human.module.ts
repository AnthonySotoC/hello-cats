import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Human } from '../../shared/datasource/human.entity';
import { HumanResolver } from './human.resolver';
import { HumanService } from './human.service';
import { DataloaderService } from '../../shared/modules/dataloader/dataloader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  providers: [HumanResolver, HumanService, DataloaderService],
  exports: [HumanService],
})
export class HumanModule {}
