import { useEffect, useState, useLayoutEffect } from 'react'

const HookUseLayoutEffect = () => {

    const [name, setName] = useState("Algum nome");

    // ===============================
    // useLayoutEffect
    // ===============================
    // Executa ANTES da tela ser pintada
    // Ideal para ajustes visuais e medições do DOM
    useLayoutEffect(() => {
        console.log("1 - useLayoutEffect executou");
    }, []);

    // ===============================
    // useEffect
    // ===============================
    // Executa DEPOIS da tela ser pintada
    // Ideal para efeitos colaterais comuns
    useEffect(() => {
        console.log("2");
        setName("Mudou denovo!");
    }, []);

    // Mostra o valor atual do estado em cada render
    console.log(name);

    return (
        <div>
            <h2>Hook useLayoutEffect</h2>

            <p>Nome: {name}</p>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <hr />
        </div>
    )
}

export default HookUseLayoutEffect
