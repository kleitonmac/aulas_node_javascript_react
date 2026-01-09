import { useState } from 'react'

const HookuseState = () => {

    // 1 - useState
    // Esta variável NÃO é um state do React.
    // Quando ela muda, o componente NÃO renderiza novamente.
    let userName = 'Kleiton';
    
    // Aqui criamos um state chamado "name"
    // "name" guarda o valor atual
    // "setName" é a função responsável por atualizar o state
    const [name, setName] = useState('Alana');
    
    // Função executada ao clicar no botão
    const trocaNomes = () => {

        // Alteração de variável comum (não causa re-render)
        userName = 'Caio Silva';

        // Alteração de state (causa re-render do componente)
        setName('Alana Reis');

        // Mostra no console o valor atualizado da variável comum
        console.log(userName);

        // ATENÇÃO: o state pode não atualizar imediatamente
        // O console pode mostrar o valor antigo devido ao comportamento assíncrono do setState
        console.log(name);
    }

    // 2 - useState com inputs
    // State para armazenar a idade digitada no input
    const [age, setAge] = useState(15);

    // Função executada ao enviar o formulário
    const handleSubmit = (e) => {
        // Impede o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        // Exibe a idade atual armazenada no state
        console.log(age);
    }

    return (
        <div>

            {/* 1- UseState é um Hook que permite adicionar o state do React a componentes funcionais. */}
            <h2>Hook useState</h2>

            {/* Exibe o valor da variável comum */}
            <p>Variaveis: {userName}</p>

            {/* Exibe o valor controlado pelo useState */}
            <p>useState: {name}</p>

            {/* Botão que dispara a função trocaNomes */}
            <button onClick={trocaNomes}>Mudar nomes</button>

            {/* 2 - useState com inputs */}
            <p>Digite a sua Idade</p>

            {/* Formulário controlado */}
            <form onSubmit={handleSubmit}>

                {/* 
                    Input controlado:
                    - value vem do state "age"
                    - onChange atualiza o state conforme o usuário digita
                */}
                <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                />

                {/* Mostra o valor atualizado em tempo real */}
                <p>Sua idade é: {age}</p>

                {/* Botão de envio do formulário */}
                <input type="submit" value="Enviar" />
            </form>

            <hr />
        </div>
    )
}

export default HookuseState
