import { Module } from '@nestjs/common';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';
import { HumanService } from '../human/human.service';

@Module({
  providers: [CatResolver, CatService, HumanService],
})
export class CatModule {}
