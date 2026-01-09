import { useRef, useEffect, useDebugValue } from "react";

export const usePrevious = (value) => {
    const ref = useRef();

    useDebugValue(ref.current, value => `Valor anterior: ${value}`);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
