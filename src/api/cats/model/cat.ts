import { Field, ID, ObjectType } from 'type-graphql';
import { Human } from '../../humans/model/human';

@ObjectType()
export class Cat {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => Human, { nullable: true })
  owner?: Human;
}
