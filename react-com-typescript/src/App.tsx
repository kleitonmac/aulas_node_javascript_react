// Importa o arquivo de estilos globais do App
import './App.css'

// ===============================
// 4 - Importação de componentes
// ===============================

// Componente simples
import FirstComponents from './components/FirstComponents'

// Componente que recebe props
import SecondComponents from './components/SecondComponents'

// Componente que usa desestruturação de props
// Também importa o enum Category
import Destructuring , {Category} from './components/Destructuring'

// ===============================
// 6 - State (useState)
// ===============================
import State from './components/State'

// ===============================
// Context API
// ===============================
import { createContext } from 'react'
import Context from './components/Context'

// ===============================
// 7 - Types (TypeScript)
// ===============================

// Tipo que aceita string ou null
type textOrNull = string | null

// Tipo literal: só aceita esses valores específicos
type fixed = "isso" | "aquilo" | "agora"

// ===============================
// 9 - Interface do Context
// ===============================

// Define o formato dos dados que o Context irá compartilhar
interface IAppContext {
  language : string;
  frameworks : string;
  projects : number;
}

// Criação do Context com tipagem
// Pode ser IAppContext ou null
export const AppContext = createContext<IAppContext | null>(null)

// ===============================
// Componente principal App
// ===============================
function App() {

  // ===============================
  // Variáveis tipadas com TypeScript
  // ===============================

  const name: string = 'kleiton'
  const age: number = 28
  const isWorking: boolean = true

  // ===============================
  // Uso de types personalizados
  // ===============================

  const myText : textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = "opa"; // Exemplo válido

  // Tipo literal
  const testandoFixed : fixed = "isso"

  // ===============================
  // 9 - Valor do Context
  // ===============================

  const contextValue : IAppContext = {
    language : 'Javascript',
    frameworks: 'express',
    projects : 5,
  }

  // ===============================
  // Função tipada
  // ===============================

  // Recebe uma string e retorna uma string
  const userGreeting = (name : string) : string => {
    return `Olá, ${name}`
  }

  // ===============================
  // JSX (Renderização)
  // ===============================
  return (
    // Provider disponibiliza os dados do Context
    <AppContext.Provider value={contextValue}>
      <div>

        <h1>Aula typescript</h1>

        {/* Exibição de variáveis */}
        <h2>Nome: {name}</h2>
        <p>idade : {age}</p>

        {/* Renderização condicional */}
        {isWorking && (
          <div>
            <p> Esta trabalhando</p>
          </div>
        )}

        {/* Chamada de função dentro do JSX */}
        <p>{userGreeting(name)}</p>

        {/* Componentes */}
        <FirstComponents/>
        <SecondComponents name="Segundo"/>

        {/* Componente com props tipadas e enum */}
        <Destructuring  
          title='Primeiro Conteudo' 
          content='Outros' 
          commentsQty={10} 
          tags={["ts" , "js" , "node"]}
          category ={Category.TS}
        />

        <div>
          <Destructuring  
            title='Segundo Conteudo' 
            content='Outras aulas' 
            commentsQty={5} 
            tags={["Python" , "PHP" , "Java"]}
            category ={Category.P}
          />
        </div>

        {/* Componente que usa useState */}
        <State/>

        {/* Renderização condicional baseada em null */}
        {myText && <p> tem texto na variavel</p>}
        {mySecondText && <p>tem texto na variavel</p>}

        {/* Componente que consome o Context */}
        <Context/>

      </div>
    </AppContext.Provider>
  )
}

// Exportação padrão do App
export default App
