import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../model/User";

/* Utilizado aqui para gerar um UUID randômico. */
import crypto from "crypto";

@Resolver() /* Decorator */
export class UserResolver {
  /* O banco de dados entra aqui ... */
  /* No lugar de data */
  private data: User[] = [];
  
  /* Necessário especificar qual o retorno da Query. */
  /* Neste caso vai retornar todos os usuários que estarão em uma lista (array). */
  /* No GraphQl o array é colocado dentro do colchetes "[user]" e não ao final como no TypeScript. */
  @Query(() => [User])
  async users() {
    return this.data;
  }

  /* () => User - Após ser realizada vai retornar o usuário criado. */
  @Mutation(() => User)
  async createUser( 
    /* Recebe o nome com parâmetro. */
    @Arg('name') name: string

  ) {
    /* Ciar um novo usuário. */
    const user = { id: crypto.randomUUID(), name }

    /* Coloca o usuário no array  que representa o banco de dados. */
    this.data.push(user)

    return user
  }
}