import React from 'react'
// Context
import { useContext } from "react";
import { SomeContext } from "../src/components/HookUseContext";


const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default About