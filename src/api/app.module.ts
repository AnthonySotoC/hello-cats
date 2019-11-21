import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatModule } from './cat/cat.module';
import { HumanModule } from './human/human.module';
import { GRAPHQL_CONFIG } from 'src/shared/config/graphql';

@Module({
  imports: [CatModule, HumanModule, GraphQLModule.forRoot(GRAPHQL_CONFIG)],
})
export class AppModule {}
