import { usePrevious } from '../hooks/usePrevious';
import { useState } from 'react';

const HookCustom = () => {
    // useState controla o valor atual
    // Inicialmente, number começa em 0
    const [number, setNumber] = useState(0);

    // usePrevious recebe o valor atual (number)
    // e retorna o valor da renderização anterior
    // Na primeira renderização, o valor anterior será undefined
    const previousNumber = usePrevious(number);

    return (
        <div>
            <h2>HookCustom</h2>

            {/* Exibe o valor atual do estado */}
            <p>Valor atual: {number}</p>

            {/* Exibe o valor anterior armazenado pelo custom hook */}
            <p>Valor anterior: {previousNumber}</p>

            {/* 
                Ao clicar no botão:
                1. setNumber altera o estado
                2. O componente é renderizado novamente
                3. usePrevious ainda contém o valor antigo
                4. Após o render, o hook salva o novo valor
            */}
            <button onClick={() => setNumber(Math.random())}>
                Alterar
            </button>

            <hr />
        </div>
    );
};

export default HookCustom;
