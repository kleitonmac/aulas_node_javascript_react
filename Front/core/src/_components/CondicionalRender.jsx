
import { useState } from 'react';

const CondicionalRender = () => {
  const [x] = useState(true);
  const [nome , setName] = useState('alana');

  return (
    <div>
        {/* renderização condicional */}
        <h1>Isso será exibido ?</h1>
        {x && <p>Se x for true, sim!</p>}
        {/* renderização if e else no jsx */}
        <h1>if ternário</h1>
        {nome === 'kleiton' ? (
          <div>
              <div>
                  <p> meu nome é {nome}</p>
              </div>
          </div>
        ) : (
          <p> Nome não encontrado</p>
        )}
<button onClick={() => setName('kleiton')}>Mudar nome</button>
    </div>
  )
}

export default CondicionalRender