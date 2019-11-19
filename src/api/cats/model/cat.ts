import { Field, ID, ObjectType } from 'type-graphql';
import { Human } from 'src/api/humans/model/human';

@ObjectType()
export class Cat {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Human, { nullable: true })
  owner?: Human;
}
