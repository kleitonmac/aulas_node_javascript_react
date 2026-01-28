// Importa o React e os hooks/tipos necessários
// useState → controla estado do componente
// ChangeEvent → tipa corretamente eventos de input no TypeScript
import React, { useState, ChangeEvent } from 'react';

// Componente funcional State
const State = () => {

  // ===============================
  // useState
  // ===============================
  // Cria um estado chamado "text"
  // <string> define que o estado só pode ser string
  // '' é o valor inicial
  const [text, setText] = useState<string>('');

  // ===============================
  // Função de evento
  // ===============================
  // handleChange será chamada sempre que o usuário digitar no input
  // ChangeEvent<HTMLInputElement> garante tipagem correta do evento
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Atualiza o estado com o valor digitado no input
    setText(e.target.value);
  };

  // ===============================
  // JSX (renderização)
  // ===============================
  return (
    <div>

      {/* Exibe o valor atual do estado */}
      <p>O texto é: {text}</p>

      {/* 
        Input controlado:
        - value recebe o estado "text"
        - onChange atualiza o estado a cada digitação
      */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />

    </div>
  );
};

// Exporta o componente para uso em outros arquivos
export default State;
