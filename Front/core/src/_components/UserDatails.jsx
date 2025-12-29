import './UserDatails.css';

const UserDatails = ({name ,idade ,profissao }) => {
  return (
    <div>
      <h2 className='Usuario'>Dados do Usuário</h2>
      <p className='Nome'>Nome: {name}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {idade >= 18 ? (
        <p>Você pode tirar a carteira.</p>
      ) : (
        <p>Não pode tirar a carteira.</p>
      )}
    </div>
  )
}

export default UserDatails