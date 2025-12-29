import { useState } from "react"

const ListasRender = () => {
  const [listas] = useState(['kleiton','alana','kleisson'])

  //  modo correto de fazer useState via id em um banco de dados em um projeto real
  const [users, setUsers] = useState([
    { id: 1 , name: 'kleiton', age: 28 },
    { id: 2, name: 'alana' ,age: 32 },
    { id: 3 , name: 'kleisson', age: 25 }
  ])

  // função de PreviusState pego um determinado dado e dentro dele faço um atualização

  const  deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    // alterando o estado anterior 
    // o setUsers recebe uma função que recebe o estado anterior
    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => user.id !== randomNumber)
    })
  }

  return (
    <div>
        <div>
            <ul>
                {/* função para listas no react dentro do map o objeto de chamada sempre sera item  listas.map((item)*/}
                {listas.map((item , i) => ( 
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
              {/* função para listas no react dentro do map para chave unica */}
              {users.map((user) => 
              <li key={user.id}>{user.name} - {user.age}</li>
              )}
            </ul>
            {/* previus State */}
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    </div>
  )
}

export default ListasRender