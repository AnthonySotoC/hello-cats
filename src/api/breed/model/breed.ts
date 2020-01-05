import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Breed {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  name: string;
}
