import { useParams, Link, Outlet } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
  const { id } = useParams()

  //  5 -- Carregamento individual de produto
  const url = "http://localhost:3000/products/" + id
  const { data: product, loading, error } = useFetch(url)
  console.log(product)

  return (
    <div>
      <p>Id do produto: {id}</p>

      {error && <p>ocorreu um error</p>}
      {loading && <p>Carregando...</p>}

      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>
          <p>{product.description}</p>

          {/* nested router */}
          <Link to="info">Mais informações</Link>

          <Outlet />
        </div>
      )}
    </div>
  )
}

export default Product
