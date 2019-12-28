import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ConfigModule } from '@config/config.module';
import { ConfigService } from '@config/config.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.graphql,
      inject: [ConfigService],
    }),
  ],
})
export class GraphqlModule {}
