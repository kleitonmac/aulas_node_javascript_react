// ===============================
// Importações
// ===============================

// Importa o React e o tipo ReactElement
// ReactElement é usado para tipar explicitamente o retorno do componente
import React , { ReactElement } from 'react'

// ===============================
// Componente funcional
// ===============================

// Função que define o componente FirstComponents
// O retorno é tipado como ReactElement, garantindo que o JSX seja válido
function FirstComponents(): ReactElement {
  return (
    <div>

      {/* Conteúdo renderizado pelo componente */}
      <h1>Meu primeiro</h1>

    </div>
  )
}

// ===============================
// Exportação
// ===============================

// Exporta o componente para uso em outros arquivos
export default FirstComponents
