import { useReducer, useState } from 'react'

const HookuseReducer = () => {

  // ===============================
  // 1️⃣ useReducer básico (contador aleatório)
  // ===============================

  // Reducer sempre recebe (state, action)
  const numberReducer = (state, action) => {
    // Aqui ignoramos a action e apenas retornamos um novo número
    return Math.floor(Math.random() * 100)
  }

  // useReducer precisa de um estado inicial
  const [number, dispatch] = useReducer(numberReducer, 0)

  // ===============================
  // 2️⃣ useReducer com lista de tarefas
  // ===============================

  const initialTask = [
    { id: 1, task: 'Estudar React' },
    { id: 2, task: 'Estudar JavaScript' },
  ]

  // Reducer das tarefas
  const taskReducer = (state, action) => {
    switch (action.type) {

      case 'ADD':
        // O reducer deve ser PURO
        // Ele NÃO deve acessar useState diretamente
        return [
          ...state,
          {
            id: Math.random(),
            task: action.text, // recebe o texto pela action
          }
        ]

      case 'DELETE':
        return state.filter(task => task.id !== action.id)

      default:
        return state
    }
  }

  // Estado controlado do input
  const [textTasks, setTextTasks] = useState('')

  // useReducer das tarefas
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)

  // ===============================
  // 3️⃣ Funções auxiliares
  // ===============================

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!textTasks.trim()) return

    // Enviamos o texto pela action
    dispatchTasks({ type: 'ADD', text: textTasks })

    // Limpa o input (fora do reducer, como deve ser)
    setTextTasks('')
  }

  // ===============================
  // 4️⃣ JSX
  // ===============================

  return (
    <div>

      {/* useReducer simples */}
      <h2>Hook useReducer</h2>
      <p>Número: {number}</p>

      {/* dispatch SEMPRE dispara uma action */}
      <button onClick={() => dispatch()}>Alterar Número</button>

      <hr />

      {/* useReducer com lista */}
      <h3>Tarefas:</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={textTasks}
          onChange={(e) => setTextTasks(e.target.value)}
        />
        <input type="submit" value="Adicionar Tarefa" />
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onDoubleClick={() => removeTask(task.id)}
          >
            {task.task}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  )
}

export default HookuseReducer
