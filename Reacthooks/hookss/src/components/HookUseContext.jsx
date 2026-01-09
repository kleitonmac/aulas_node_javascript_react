import { createContext } from "react";

// 1. Criação do contexto
export const SomeContext = createContext();

// 2. Provider do contexto
export const HookUseContext = ({ children }) => {
  const contextValue = "cores do contexto";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
      
    </SomeContext.Provider>
  );
};
