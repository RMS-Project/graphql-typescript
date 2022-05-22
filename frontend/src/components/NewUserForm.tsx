import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USERS } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState('');

  /* Será chamada a função somente declara somente quando for executar a ação de cadastro*/
  /* Obtendo o objeto com vários parâmetros para verificar se ação foi executada e dados. */
  const [ createUser, {data, loading, error} ] = useMutation(CREATE_USER)

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    }

    await createUser({
      variables: {
        name,
      },

      /* Após cadastrar recarregue a lista de usuários. */
      /* Porém faz uma nova requisição no backend.      */
      // refetchQueries: [GET_USERS]

      /* Para não fazer uma nova requisição deve-se buscar o valor no cache e */
      /* adicionar ao final da lista de users.                                */
      update: (cache, { data: { createUser } }) => {
        const { users } = client.readQuery({ query: GET_USERS })

        cache.writeQuery({
          query: GET_USERS,
          data:{
            users: {
              // Adiciona o usuário no final da lista users.
              ...users,
              createUser,
            }
          }
        })
      }
    })

    console.log(data)
  }
  
  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}