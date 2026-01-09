import { useState, useMemo, useEffect, use } from "react"

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

//   const premiumNumber = ["2", "7", "9"];

    const premiumNumber = useMemo(() => {
    return ["2", "7", "9"];
  }, []);

  useEffect(() => {
    console.log("Numeros Premium alterados");
  }, []);

  return (
    <div>
        <h2>UseMemo</h2>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
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