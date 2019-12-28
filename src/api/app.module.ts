import { Module } from '@nestjs/common';

import { CatModule } from '@api/cat/cat.module';
import { HumanModule } from '@api/human/human.module';

import { ConfigModule } from '@config/config.module';
import { GraphqlModule } from '@config/modules/graphql/graphql.module';
import { TypeormModule } from '@config/modules/typeorm/typeorm.module';

import { DataloaderModule } from '@shared/modules/dataloader/dataloader.module';

@Module({
  imports: [CatModule, HumanModule, ConfigModule, GraphqlModule, TypeormModule, DataloaderModule],
})
export class AppModule {}
