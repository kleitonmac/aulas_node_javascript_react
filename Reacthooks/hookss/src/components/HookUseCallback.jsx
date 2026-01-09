import { useState, useCallback } from "react"
import List from "./List"

const HookUseCallback = () => {

    // Estado simples que causa re-render do componente
    const [counter, setCounter] = useState(0);

    // ===============================
    // useCallback
    // ===============================
    // useCallback MEMORIZA a função
    // Isso evita que uma NOVA função seja criada
    // a cada renderização do componente
    //
    // Muito útil quando:
    // - A função é passada como props para componentes filhos
    // - O componente filho usa React.memo
    // - Queremos evitar re-renderizações desnecessárias
    const getItemsFromDatabase = useCallback(() => {

        // Simulando dados vindos de um "banco de dados"
        // O valor de "counter" será capturado pelo closure
        return ["a", "b", "c"].map(item => `Item ${item} - ${counter}`);

    // A função só será recriada quando "counter" mudar
    }, [counter]);

    return (
        <div>
            <h2>Hook useCallback</h2>

            {/* Passando a função memorizada para o componente filho */}
            <List getItems={getItemsFromDatabase} />

            <p>Valor do número: {counter}</p>

            {/* Ao alterar o counter:
                - O componente renderiza
                - O useCallback recria a função
                - O List recebe nova referência */}
            <button onClick={() => setCounter(counter + 1)}>
                Alterar
            </button>

            <hr />
        </div>
    )
}

export default HookUseCallback
