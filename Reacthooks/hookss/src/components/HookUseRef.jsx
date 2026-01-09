import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {

    // ===============================
    // 1. useRef para armazenar valores persistentes
    // ===============================
    // useRef cria um objeto com a propriedade ".current"
    // O valor armazenado em .current:
    // - NÃO causa re-render quando muda
    // - É preservado entre renderizações
    const numberRef = useRef(0);

    // Estados normais (causam re-render)
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    // Este useEffect executa SOMENTE quando "counter" muda
    useEffect(() => {
        // Incrementa o valor do ref sem causar nova renderização
        numberRef.current = numberRef.current + 1;
    }, [counter]);

    // ===============================
    // 2. useRef para acessar elementos do DOM
    // ===============================
    // Aqui o useRef guarda a referência do input
    // Muito usado para:
    // - Focus automático
    // - Leitura direta de valores
    // - Integração com bibliotecas externas
    const inputRef = useRef(null);

    const [text, setText] = useState("");

    // Função chamada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Acessando diretamente o valor do input via DOM
        console.log(inputRef.current.value);

        // Limpando o estado (input controlado)
        setText("");

        // Coloca o foco novamente no input
        inputRef.current.focus();
    }

    return (
        <div>

            {/* ===============================
                Exemplo 1: useRef como contador de renderizações
               =============================== */}
            <h2>Hook useRef</h2>

            {/* Mesmo alterando numberRef.current,
                o componente NÃO renderiza novamente */}
            <p>O componente renderizou: {numberRef.current} vezes.</p>

            <p>Counter A: {counter}</p>
            <p>Counter B: {counterB}</p>

            {/* Apenas este botão afeta o useEffect acima */}
            <button onClick={() => setCounter(counter + 1)}>
                Contador A
            </button>

            {/* Este botão NÃO altera numberRef,
                pois não está nas dependências do useEffect */}
            <button onClick={() => setCounterB(counterB + 1)}>
                Contador B
            </button>

            <hr />

            {/* ===============================
                Exemplo 2: useRef com o DOM
               =============================== */}
            <h2>Input com useRef</h2>

            <form onSubmit={handleSubmit}>
                {/* Input controlado + referência direta ao DOM */}
                <input
                    type="text"
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input type="submit" value="Enviar" />
            </form>

            <hr />
        </div>
    )
}

export default HookUseRef
