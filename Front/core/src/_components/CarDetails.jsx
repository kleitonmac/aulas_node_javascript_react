

const CarDetails = ({brand , color , name , km , newCar}) => {
  return (
    <div>
        <h2>Detalhe do carro</h2>
        <ul>
            <li>Marca: {brand} </li>
            <li>Cor: {color} </li>
            <li>Nome: {name} </li>
            <li>Quilometragem: {km}</li>
        </ul>
        {newCar && <p>Este é um carro novo!</p>}
        {!newCar && <p>Este é um carro usado!</p>}

    </div>
  )
}

export default CarDetails