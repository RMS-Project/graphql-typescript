import "reflect-metadata"
import path from 'path'
import { buildSchema } from 'type-graphql'
import { ApolloServer} from 'apollo-server'
import { UserResolver } from "./resolvers/UserResolver"

async function main() {
  const schema = await buildSchema({
    /* Resolves- são como controllers (rotas da aplicação). */
    resolvers:[
      UserResolver,
    ],

    /* Local do arquivo de schema do GraphQL. */
    /* Indicando através de path que será no diretório atual em schema.ggl. */
    emitSchemaFile: path.resolve(__dirname, 'schema.ggl')
  })

  // Cria uma instancia de ApolloServer passando schema.
  const server = new ApolloServer({
    schema,
  })

  // Coloca o servidor em execução.
  const { url } = await server.listen()

  // Exibe a URL que o servidor criou.
  console.log(`Server running on ${url}`)
}

main();