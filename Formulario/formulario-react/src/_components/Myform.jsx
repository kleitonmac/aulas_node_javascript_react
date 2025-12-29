import { useState } from "react";
import "./Myform.css";

const MyForm = ({ user }) => {
  // controlled inputs

  // Gerenciamento de Inputs
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(user ? user.password : "");

  const handleName = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario");
    console.log(name);
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Criando um formulario */}
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName}
          value={name}
        />

      </div>
      <div>
        {/* Label envolvendo input */}
         <label>
          {/* Simplificando State */}
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
      </div>
      <div>
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default MyForm;
