import { useEffect, useState } from 'react'

const HookuseEffect = () => {

    // ===============================
    // 1. useEffect SEM array de dependências
    // ===============================
    // Executa SEMPRE que o componente renderiza:
    // - Na primeira renderização (mount)
    // - Em TODAS as atualizações de estado
    useEffect(() => {
        console.log("Executou o useEffect (sem dependências)");
    });

    // Estado simples para demonstrar re-renderização
    const [number, setNumber] = useState(1);

    // Função que altera o estado "number"
    // Toda vez que o estado muda, o componente renderiza novamente
    const changeNumber = () => {
        setNumber(number + 1);
    }

    // ===============================
    // 2. useEffect COM array de dependências vazio []
    // ===============================
    // Executa APENAS uma vez:
    // - Quando o componente é montado na tela (componentDidMount)
    // Muito usado para:
    // - Buscar dados em APIs
    // - Inicializações
    // - Configurações iniciais
    useEffect(() => {
        console.log("Executou o useEffect com dependências vazias");
    }, []);

    // ===============================
    // 3. useEffect COM dependências específicas
    // ===============================
    // Este estado controla quando o efeito abaixo será executado
    const [anotherNumber, setAnotherNumber] = useState(0);

    // Executa SOMENTE quando "anotherNumber" mudar
    // Ideal para reagir a mudanças específicas de estado
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log(
                "Executou o useEffect quando anotherNumber mudou:",
                anotherNumber
            );
        }
    }, [anotherNumber]);

    // ===============================
    // 4. useEffect COM CLEANUP (limpeza)
    // ===============================
    // Usado para evitar problemas como:
    // - Vazamento de memória
    // - Timers duplicados
    // - Listeners ativos após desmontar o componente
    useEffect(() => {

        // Exemplo: criando um timer
        const timer = setTimeout(() => {
            console.log("Executou após 2 segundos:", anotherNumber);
        }, 2000);

        // Função de cleanup
        // Executa quando:
        // - O componente é desmontado
        // - O valor de anotherNumber muda antes do timeout terminar
        return () => {
            clearTimeout(timer);
            console.log("Cleanup executado: timer limpo");
        };

    }, [anotherNumber]);

    return (
        <div>
            <h2>Hook useEffect - Exemplos</h2>

            <p>Number: {number}</p>
            <button onClick={changeNumber}>
                Change Number
            </button>

            <hr />

            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar Another Number
            </button>
        </div>
    )
}

export default HookuseEffect
