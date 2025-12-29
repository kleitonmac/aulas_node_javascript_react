import { useState } from "react";

const ManageData = () => {
    let someData = 10;
    console.log(someData)
    const [number, setNumber] =  useState(20);
    console.log(number)

  return (
    <div>
        <div>
            valor: {someData}
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
        <div>
          <p>valor: {number}</p>
          <button onClick={() => setNumber(30)}>Mudar estado</button>
        </div>
    </div>
  )
}

export default ManageData