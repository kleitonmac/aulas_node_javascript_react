import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const url = "http://localhost:3000/products?" + searchParams.toString();
  const { data: items, loading, error } = useFetch(url);

//   filtro de buscar intens pela query
  const filteredItems =
    items?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    ) || [];

  return (
    <div>
      <h1>Resultados Disponíveis</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao buscar produtos.</p>}

      {!loading && filteredItems.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      <ul className="products">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
