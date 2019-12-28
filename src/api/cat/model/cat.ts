import { Field, ID, ObjectType } from 'type-graphql';

import { Human } from '@api/human/model/human';

@ObjectType()
export class Cat {
  @Field(type => ID)
  id: number;

  @Field(type => Number)
  humanId?: number;

  @Field(type => String)
  name: string;

  @Field(type => Human, { nullable: true })
  human?: Human;
}
