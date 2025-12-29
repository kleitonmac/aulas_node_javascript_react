import { useState } from 'react';
import './App.css';
import Seal from './assets/Seal.jpg';
// import Section from './_components/Section';
import ManageData from './_components/ManageData';
import ListasRender from './_components/ListasRender';
import CondicionalRender from './_components/CondicionalRender';
// import Props from './_components/Propriedade';
import Propriedade from './_components/Propriedade';
import CarDetails from './_components/Cardetails';
import Fragments from './_components/Fragments';
import Container from './_components/Container';
import ExecuteFunction from './_components/ExecuteFunction';
import Message from './_components/Message';
// import Mensagem from './_components/Message';
import ChangeMessage from './_components/ChangeMessage';
import UserDatails from './_components/UserDatails';
import Titulo from './_components/Titulo';




function App() {
  const cars = [
    {id:1 ,brand: 'Ferrari', color:'Amarela', newCar: true, km:0},
    {id:2 ,brand: 'Audi', color:'Preto', newCar: false, km:5000},
    {id:3 ,brand: 'Land Rover', color:'Branco', newCar: false, km:10000}
  ]
  // funcao com props
function ShowMenssage() {
    console.log('Evento do componente pai');
  } 
// funcao do state lift
   const [message, setMessage] = useState('');
     const handleMessage =(msg) => {
      setMessage(msg);
  }
  const User = [
    {id: 1, name: 'Kleiton', idade: 28, profissao: 'Programador'},
    {id: 2, name: 'Alana', idade: 32, profissao: 'Professora'},
    {id: 3, name: 'Guilherme', idade: 4, profissao: 'Primario' }
  ]
  
  const n= 15;
  const redTitle = false;

  return (
    <>  
      <div>
        <div>
          {/* importação via public de imagens utilizado quando não tera opcao de mudança */}
          <img src="/208.jpg" alt="carros da peugeot" /> 
        </div>
        <div>
          {/* inline CSS */}
          <p style={{ color: 'red' }}>Olá mundo</p> 
          {/* Css inline dinamico */}
          <h2 style={n < 10 ? { color: 'blue', fontSize: 25 } : { color: 'green', fontSize: 30 }}>CSS dinamico</h2> 
          {/* CSS dinamico  */}
          <h3 className={redTitle ? 'red-title' : 'title'}>OLá pessoal tudo bem</h3>
          {/* CSS Modules */}
          {/* <Titulo />  */}
          {/* importação via assets */}
          <img src={Seal} alt='Byd' />
          {/* importação via assets que pode ser mudadar de acordo com o projeto */}
        </div>
        <Section /> 
        <ManageData /> 
       <ListasRender /> 
       <CondicionalRender />
       {/* Props */}
       <Propriedade   name = 'Kleiton'/> 
       {/* funçao atribuida a propriedade */}
       <CarDetails brand = 'Nissan' color= 'Branco'  name = 'GTR' newCar={true}/>
       {/* função Desestruturando */}
       {/* Reaproveitando */}
       <CarDetails brand = 'Peugeot' color= 'Preto' name = '208' km={30000} newCar={false}/>
       <CarDetails brand = 'Fiat' color= 'Vermelho' name= 'Uno' km= {15000} newCar= {false} />
       {/* looping em arrays de objetos */}
       {cars.map((car) => (
         <CarDetails
           key={car.id}
           brand={car.brand}
           color={car.color}
           name={car.name}
           km={car.km}
           newCar={car.newCar}
         />
       ))}
       Fragments
       <Fragments PropsFragments='Teste'/>
       <Container>
         <h2>Conteudo do Container</h2>
       </Container>
       executar funções
       <ExecuteFunction  MyFunction={ShowMenssage} />
       {/* state lift*/}
       <Message msg={message} />
       <ChangeMessage  handleMessage={handleMessage} />
       {/* desafio 4 */}
       {User.map((user) => (
         <UserDatails 
            key={user.id} 
           name={user.name}
           idade={user.idade}
           profissao={user.profissao}
         />
       ))}
        


      </div>
      
    </>
  )
}

export default App
