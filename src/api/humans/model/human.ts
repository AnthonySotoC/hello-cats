import { Field, ID, ObjectType } from 'type-graphql';
// import { Cat } from 'src/api/cats/model/cat';

@ObjectType()
export class Human {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  /*@Field(type => [Cat], { nullable: true })
  cats?: Cat[];*/
}
