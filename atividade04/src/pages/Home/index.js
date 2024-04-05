import * as React from 'react'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import './style.css'

export function Home() {

  const [sigla, setSigla] = React.useState([])

  React.useEffect(() => {
    fetch(
      'http://localhost:5000/turma',
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json' // Passando tipo de conteudo
        }
      }
    )
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setSigla(data)
          console.log(data)
        })
      .catch(
        (error) => console.log(error)
      )
  }, [])

  return (
    <section className="home_container">
      <h1>Cadastre livro</h1>

      <form>
        <Input
          type="text"
          name="nome_turma"
          id="nome_turma"
          placeholder="Turma XXX..."
          text="Digite o nome da turma"
        />

        <Select
          name="sigla_turma"
          id="sigla_turma"
          options={sigla}
          // handlerOnChange={}
          // value={}
          text="Escolha a sigla da Turma"
        />

        <button type='submit'>Enviar</button>

      </form>
    </section>
  )
}

// const [categories, setCategories] = React.useState([])

//   React.useEffect(() => {
//     fetch( //Metodo para requisições, assim como axios manualmente
//       'http://localhost:5000/categories', // Passando o url/route
//       {
//         method: 'Get',
//         headers: {
//           'Content-Type': 'application/json' // Passando tipo de conteudo
//         }
//       }).then(
//         (res) => res.json()
//       ).then((data) => {
//         setCategories(data)
//         console.log(data)
//       }).catch(
//         (error) => console.log(error)
//       )
//   }, []) // O array vazio é o estado inicial (A ser chamado 1°) do useEffect

//   return (
//     <section className="newbook_container">
//       <h1>Cadastre livro</h1>

//       <form>
//         <Input
//           type="text"
//           name="nome_livro"
//           id="nome_livro"
//           placeholder="Digite o titulo do livro"
//           text="Digite o titulo do livro"
//         />

//         <Input
//           type="text"
//           name="nome_autor"
//           id="nome_autor"
//           placeholder="Digite o nome do autor"
//           text="Digite o nome do autor"
//         />

//         <Input
//           type="text"
//           name="descricao_livro"
//           id="descricao_livro"
//           placeholder="Digite a descricao do livro"
//           text="digite a descricao do livro"
//         />

//         <Select
//           name="categoria_livro"
//           id="categoria_livro"
//           options={categories}
//           // handlerOnChange={}
//           // value={}
//           text="testando"
//         />

//         <button type='submit'>Enviar</button>

//       </form>
//     </section>
//   )