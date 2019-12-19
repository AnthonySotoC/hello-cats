import { HumanService } from './../human/human.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from '../../shared/datasource/cat.entity';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';

import { HumanModule } from '../human/human.module';

import { DataloaderService } from './../../shared/modules/dataloader/dataloader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), HumanModule],
  providers: [CatResolver, CatService, DataloaderService],
  exports: [CatService],
})
export class CatModule {}
