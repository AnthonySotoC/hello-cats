import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatModule } from './cat/cat.module';
import { HumanModule } from './human/human.module';
import { GRAPHQL_CONFIG } from 'src/shared/config/module-options/graphql';
import { ConfigService } from 'src/shared/config/config.service';
import { ConfigModule } from 'src/shared/config/config.module';

@Module({
  imports: [
    CatModule,
    HumanModule,
    ConfigModule,
    GraphQLModule.forRoot(GRAPHQL_CONFIG),
  ],
})
export class AppModule {
  constructor(config: ConfigService) {
    console.log(config.isApiAuthEnabled);
  }
}
