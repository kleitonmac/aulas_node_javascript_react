// Importa o CSS do componente
import './App.css'

// Importa o hook useState para controlar estados
import { useState } from 'react'

// Importa o hook customizado de requisições HTTP
import { useFetch } from './hooks/useFetch'

function App() {
  // URL base da API (json-server)
  const url = 'http://localhost:3000/products'

  // Usa o hook customizado
  // data → renomeado para items
  // httpConfig → função para POST e DELETE
  // loading → indica carregamento
  // error → guarda mensagens de erro
  const { data: items, httpConfig, loading, error } = useFetch(url)

  // Estados do formulário
  // name → nome do produto
  // price → preço do produto
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // Função para DELETAR um produto
  // Recebe o ID do item e envia para o hook
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  // Função para CRIAR um produto
  const handleSubmit = (e) => {
    e.preventDefault() // evita recarregar a página

    // Cria o objeto do produto
    const product = {
      name,                 // nome digitado no input
      price: Number(price), // converte string para número
    }

    // Envia o produto para o hook fazer o POST
    httpConfig(product, "POST")

    // Limpa os campos do formulário
    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* Exibe mensagem enquanto os dados estão sendo carregados */}
      {loading && <p>Carregando dados...</p>}

      {/* Exibe mensagem de erro, se existir */}
      {error && <p>{error}</p>}

      {/* Renderiza a lista apenas se NÃO houver erro */}
      {!error && (
        <ul>
          {/* Percorre a lista de produtos */}
          {items && items.map((item) => (
            <li key={item.id}>
              {/* Exibe nome e preço */}
              {item.name} - R${item.price}

              {/* Botão que chama o DELETE */}
              <button onClick={() => handleRemove(item.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="add-product">
        <h2>Adicionar Produto</h2>

        {/* Formulário para adicionar produto */}
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name} // valor controlado pelo estado
              onChange={(e) => setName(e.target.value)} // atualiza o estado
              required
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price} // valor controlado pelo estado
              onChange={(e) => setPrice(e.target.value)} // atualiza o estado
              required
            />
          </label>

          {/* Botão muda conforme o loading */}
          {loading ? (
            <input type="submit" disabled value="Aguarde..." />
          ) : (
            <input type="submit" value="Criar" />
          )}
        </form>
      </div>
    </div>
  )
}

// Exporta o componente App
export default App
