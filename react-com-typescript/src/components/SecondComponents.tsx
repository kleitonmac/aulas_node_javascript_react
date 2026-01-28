// Importa o React para permitir o uso de JSX
import React from 'react'

// ===============================
// Interface de Props
// ===============================
// Define o formato das propriedades que o componente deve receber
// Neste caso, o componente é obrigado a receber uma prop chamada "name"
// do tipo string
interface Props {
    name: string
}

// ===============================
// Componente funcional
// ===============================
// Recebe as props tipadas pela interface Props
const SecondComponents = (props : Props ) => {
  return (
    <div>

        {/* Título fixo do componente */}
        <h1>Segundo Components</h1>

        {/* 
          Exibe o valor recebido via props
          props.name é garantido como string pelo TypeScript
        */}
        <p>O nome dela é : {props.name}</p>

    </div>
  )
}

// Exporta o componente para que possa ser utilizado em outros arquivos
export default SecondComponents
