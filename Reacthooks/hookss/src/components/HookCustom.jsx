import {usePrevious} from '../hooks/usePrevious'
import { useState } from 'react'

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previousNumber = usePrevious(number)

  return (
    <div>
        <h2>HookCustom</h2>
        <p>Valor atual: {number}</p>
        <p>Valor anterior: {previousNumber}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
        <hr />
    </div>
  )
}

export default HookCustom