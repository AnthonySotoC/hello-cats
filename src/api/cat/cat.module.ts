import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from '@datasource/models/cat.entity';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatResolver, CatService],
  exports: [CatService],
})
export class CatModule {}
