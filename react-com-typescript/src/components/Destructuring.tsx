// Importa o React para permitir o uso de JSX
import React from 'react'

// ===============================
// Interface de Props
// ===============================
// Define o formato das propriedades que o componente deve receber
interface Props {
    // Título do conteúdo
    title: string

    // Texto principal
    content: string

    // Quantidade de comentários
    commentsQty: number

    // Lista de tags (array de strings)
    tags: string[]

    // Categoria tipada com enum
    category : Category;
}

// ===============================
// 8 - Enum
// ===============================
// Enum define um conjunto fixo de valores possíveis
// Ajuda a evitar erros de digitação e melhora a legibilidade
export enum Category{
  JS = "Javascript",
  TS = "Typescript",
  P  = "Python",
}

// ===============================
// Componente com desestruturação de props
// ===============================

// As props são desestruturadas diretamente nos parâmetros da função
// A tipagem (: Props) garante que todas as propriedades sejam validadas
const Destructuring = ({
  title, 
  content, 
  commentsQty, 
  tags, 
  category 
} : Props) => {
  return (
    <div>

        {/* Exibe o título */}
        <h2>{title}</h2>

        {/* Exibe o conteúdo */}
        <p>{content}</p>

        {/* Exibe a quantidade de comentários */}
        <p>Quantidade de comentarios : {commentsQty}</p>

        {/* Renderização de lista usando map */}
        <div>
            {tags.map(tag => (
              // Cada tag é exibida como um span
              <span>#{tag}</span>   
            ))}
        </div>

        {/* Exibe a categoria vinda do enum */}
        <h4>Categoria: {category}</h4>

    </div>
  )
}

// ===============================
// Exportação
// ===============================

// Exporta o componente para uso em outros arquivos
export default Destructuring
