import { Module } from '@nestjs/common';

import { CatModule } from './cat/cat.module';
import { HumanModule } from './human/human.module';
import { ConfigModule } from '../shared/config/config.module';
import { GraphqlModule } from '../shared/config/modules/graphql/graphql.module';
import { TypeormModule } from '../shared/config/modules/typeorm/typeorm.module';
import { DataloaderModule } from '../shared/modules/dataloader/dataloader.module';

@Module({
  imports: [CatModule, HumanModule, ConfigModule, GraphqlModule, TypeormModule, DataloaderModule],
})
export class AppModule {}
