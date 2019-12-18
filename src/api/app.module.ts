import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { CatModule } from './cat/cat.module';
import { HumanModule } from './human/human.module';
import { ConfigService } from '../shared/config/config.service';
import { ConfigModule } from '../shared/config/config.module';

@Module({
  imports: [
    CatModule,
    HumanModule,
    ConfigModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => configService.graphql,
      inject: [ConfigService],
    }),
    /*TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => configService.typeORM,
      inject: [ConfigService],
    }),*/
  ],
})
export class AppModule {
  constructor(config: ConfigService) {
    console.log(config.graphql);
  }
}
