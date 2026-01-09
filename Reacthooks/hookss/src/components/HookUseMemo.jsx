import { useState, useMemo, useEffect } from "react"

const HookUseMemo = () => {

  // Estado que armazena o valor digitado no input
  // Mesmo sendo um número, ele será tratado como string,
  // pois vem de um input do tipo text
  const [number, setNumber] = useState(0)

  /*
    useMemo é usado para memorizar um valor calculado.
    O valor só será recriado quando alguma dependência mudar.

    Neste caso, estamos criando uma lista de números "premium".
    Como essa lista é fixa, usamos um array de dependências vazio ([]),
    garantindo que ela seja criada apenas uma vez.
  */
  const premiumNumber = useMemo(() => {
    return ["2", "7", "9"]
  }, [])

  /*
    useEffect será executado apenas uma vez,
    pois o array de dependências está vazio.

    Aqui ele serve apenas para demonstrar quando
    o componente é montado.
  */
  useEffect(() => {
    console.log("Números Premium definidos")
  }, [])

  return (
    <div>
      <h2>UseMemo</h2>

      {/*
        Input controlado:
        - value vem do estado
        - onChange atualiza o estado a cada digitação
      */}
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      {/*
        Verificamos se o número digitado
        existe dentro do array premiumNumber.

        Graças ao useMemo, premiumNumber não é recriado
        a cada renderização, evitando cálculos desnecessários.
      */}
      {premiumNumber.includes(number) ? (
        <p>É um número premium!</p>
      ) : (
        <p>Não é um número premium!</p>
      )}

      <hr />
    </div>
  )
}

export default HookUseMemo
