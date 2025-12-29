const Events = () => {
    // Função para lidar com eventos
    const handleMyEvents = (e) => {
        console.log(e);
        console.log('Ativou o evento');
    };

    // Função para renderizar algo condicionalmente
    const renderSomething = (x) => {
          if(x) {
            return <h1>Renderizando isso</h1>

          }else {
            return <h1>Também posso renderizar isso</h1>

          }

    };

    return (
        <div>
             <div>
                <button onClick={handleMyEvents}>clique aqui</button>
             </div>
             <div>
                <button onClick={()=> console.log("Ativou")}>Clique aqui tambem

                </button>
             </div>
             {renderSomething(true)} 
             {renderSomething(false)}
        </div>
    )
}

export default Events;