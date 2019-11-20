import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { HumansModule } from './humans/humans.module';

@Module({
  imports: [
    CatsModule,
    HumansModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
   
  ],
})
export class AppModule {}
