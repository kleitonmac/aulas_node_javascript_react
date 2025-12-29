import { useState } from 'react'
import Myform from './_components/Myform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2 className='form'>Conteudo do formulario</h2>
       <Myform  user={{name:"kleiton" , email:"kleiton@example.com"}}/>
      </div>
    </>
  )
}

export default App
