// Importa o React e o hook useContext
// useContext permite acessar valores compartilhados pelo Context API
import React, { useContext } from 'react'

// Importa o Context criado no componente App
import { AppContext } from '../App'

// ===============================
// Componente Context
// ===============================
const Context = () => {

    // ===============================
    // useContext
    // ===============================
    // Recupera os dados fornecidos pelo AppContext.Provider
    // O valor pode ser um objeto ou null
    const details = useContext(AppContext)

  return (
    <>
      {/* 
        Renderização condicional:
        Garante que o conteúdo só será exibido
        se o Context não for null
      */}
      {details && (
        <div>

            {/* Acessa os valores do Context */}
            <h2>Linguagem : {details.language}</h2>
            <p> FW {details.frameworks}</p>
            <p>Qts {details.projects}</p>

        </div>
      )}
    </>
  )
}

// ===============================
// Exportação
// ===============================

// Exporta o componente para uso em outros arquivos
export default Context
