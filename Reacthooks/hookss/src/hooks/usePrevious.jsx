import { useRef, useEffect, useDebugValue } from "react";

export const usePrevious = (value) => {
    // useRef cria um objeto persistente entre renders
    // ref.current não provoca re-render quando é alterado
    const ref = useRef();

    // useDebugValue serve apenas para depuração no React DevTools
    // Aqui exibimos o valor anterior armazenado no ref
    useDebugValue(
        ref.current,
        (prev) => `Valor anterior: ${prev}`
    );

    // useEffect é executado após a renderização do componente
    // Primeiro render:
    //   ref.current ainda é undefined
    // Após o efeito:
    //   salvamos o valor atual no ref
    //
    // Próximo render:
    //   ref.current conterá o valor da renderização anterior
    useEffect(() => {
        ref.current = value;
    }, [value]); // Executa apenas quando o valor mudar

    // Retornamos o valor anterior
    // Na primeira renderização será undefined
    return ref.current;
};
