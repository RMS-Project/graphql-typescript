import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()

export class User {
  /* _type => ID - Identifica que o campo é único desta classe. */
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;
}