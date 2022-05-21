import { Query, Resolver } from "type-graphql";

@Resolver() /* Decorator */

export class UserResolver {
  
  /* Necessário especificar qual o retorno da Query. */
  @Query(() => String)
  async hello() {
    return 'Hello'
  }
}