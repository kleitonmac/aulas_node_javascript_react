// src/hooks/useFetch.jsx
import { useState, useEffect } from "react";

// 4 Custom hook para requisições fetch
// arrow function
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 Loading
  const [loading, setLoading] = useState(false);

  // 7 tratamento de erros
  const [error, setError] = useState(null);

  // 8 desafio 6 - deletar dados
  const [itemId, setItemId] = useState(null);

  // 4 - continuação do custom hook useFetch (GET)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // corrigindo os argumentos
  const httpConfig = (payload, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      setMethod(method);
      setCallFetch(true);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setItemId(payload); // ✅ CORRIGIDO (antes estava data)
    }
  };

  // 5 refatorando o post (POST e DELETE)
  useEffect(() => {
    const httpRequest = async () => {
      if (!method) return;

      let json;

      if (method === "POST") {
        // ✅ CORRIGIDO
        const res = await fetch(url, config);
        json = await res.json();
        setCallFetch((prev) => !prev);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        // json-server não retorna body no DELETE
        setCallFetch((prev) => !prev); // ✅ CORRIGIDO
      }
    };

    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
