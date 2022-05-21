## GraphiQL

<b>GraphiQL</b> - Estrutura de escrita e leitura através da comunicação do Backend como Frontend.

Conjunto de padrões para comunicar o Backend com o Frontend.

Possui apenas uma única rota rota.

- Quais problemas GraphQL resolve?

  - Overfetching - Retorno de dados além do que eu preciso.

  -  Underfetching - Retornar menos dados que preciso.

- Dificuldade:
  
  - Lidar com cache. Existe vários tipos de cache, tanto frontend quando backend.
  - Tratamento de erros, pois não utiliza o status code (200, 404). Toda requisição
  retorna o status 200.

 O Backend diz que tem todos os dados que o frontend precisa e o frontend faz uma requisição chamada Query. Desta forma o Front é quem define quais dados ele quer ter de retorno.

 GraphQL pode ser criado de duas formas Esquema-Fist ou Code-Fist.

```gpl

query {
  user {
    id
    name
    github
  }

  addresses {
    city
    state
    country
  }
}

```

Criar a pasta Frontend e iniciar o React
<b>npm create vite@latest</b> 

ou 

<b>yarn add vite</b>

Iniciar do Zero a pasta backend

<b>npm init -y</b>

GraphQl pode ser utilizado de várias formas.
Aqui foi utilizado o type-graphql que cria o projeto com node e graphql com typescript.

<b>npm i type-graphql</b>

Instalação do GraphQl.

<b>npm i graphql</b>

<b>npm i apollo-server</b>

<b>npm i class-validator</b>

Solicitado via documentação do GraphQL.

<b>npm i reflect-metadata</b>

OBS: Tudo junto -> npm i type-graphql graphql apollo-server class-validator reflect-metadata

Dependências de desenvolvimento TypeScript.

<b>npm i typescript @types/node ts-node-dev -D</b>

Criar arquivo index.ts

package.json criar o script - "dev": "tsnd --respawn --transpile-only index.ts"

--transpile-only -> não verificar tipos.

Criar a pasta resolves. É nela que ficará todos os resolves da aplicação. Resolvers são como controllers (rotas) de uma aplicação rest.

Iniciar o tsc para funcionas os decorators nos resolvers.

<b>npx init -y</b>

<b>npx tsc --init</b>

Documentação: https://typegraphql.com/docs/installation.html

Retirar o comentário do arquivo criado (tsconfig.json)

```

"experimentalDecorators": true,
"emitDecoratorMetadata": true,

```

Alterar target e lib  

```
"target": "es2018"
"lib": ["es2018", "esnext.asynciterable"]

```

Adicionar a importação do reflect-metadata no arquivo index.ts

<b>import "reflect-metadata";</b>

Inicie o servidor

<b>npm run dev</b>

Será apresentado o PlayGround do Apollo Server

O GraphQL PlayGround é como o Insomnia ou o Postman para Rest.

O GraphQL tem tipagem forte, possui inteligencia sobre as query criadas. Gerando uma documentação totalmente automatizada.

46:17