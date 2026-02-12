// src/hooks/useFetch.jsx
import { useState, useEffect } from "react";

// 4 Custom hook para requisições fetch
// arrow function
export const useFetch = (url) => {
  // Estado que armazena os dados vindos da API
  const [data, setData] = useState(null);

  // 5 refatorando o post
  // config guarda as configurações da requisição (headers, body etc)
  const [config, setConfig] = useState(null);

  // method guarda qual tipo de requisição será feita (POST ou DELETE)
  const [method, setMethod] = useState(null);

  // callFetch serve como "gatilho" para refazer o GET após POST/DELETE
  const [callFetch, setCallFetch] = useState(false);

  // 6 Loading
  // controla o estado de carregamento para feedback na interface
  const [loading, setLoading] = useState(false);

  // 7 tratamento de erros
  // guarda mensagens de erro caso a requisição falhe
  const [error, setError] = useState(null);

  // 8 desafio 6 - deletar dados
  // armazena o id do item que será deletado
  const [itemId, setItemId] = useState(null);

  // 4 - continuação do custom hook useFetch (GET)
  useEffect(() => {
    // função assíncrona responsável pelo GET
    const fetchData = async () => {
      // ativa loading antes da requisição
      setLoading(true);

      try {
        // faz requisição para a URL recebida
        const res = await fetch(url);

        // converte resposta para JSON
        const json = await res.json();

        // salva dados no estado
        setData(json);
      } catch (error) {
        // log técnico no console
        console.log(error.message);

        // mensagem amigável para o usuário
        setError("Houve algum erro ao carregar os dados!");
      }

      // desativa loading após terminar
      setLoading(false);
    };

    // executa o GET
    fetchData();

    // sempre que URL mudar ou callFetch for alterado
    // a requisição GET será refeita
  }, [url, callFetch]);

  // corrigindo os argumentos
  const httpConfig = (payload, method) => {
    // configuração para requisição POST
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        // transforma objeto em JSON para envio
        body: JSON.stringify(payload),
      });

      // define o método atual
      setMethod(method);

      // ativa gatilho para atualização da lista
      setCallFetch(true);

      // configuração para requisição DELETE
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      // define método DELETE
      setMethod(method);

      // guarda o id do item a ser deletado
      setItemId(payload); // ✅ CORRIGIDO (antes estava data)
    }
  };

  // 5 refatorando o post (POST e DELETE)
  useEffect(() => {
    // função que executa POST ou DELETE
    const httpRequest = async () => {
      // se não houver método definido, não faz nada
      if (!method) return;

      let json;

      // execução do POST
      if (method === "POST") {
        // envia requisição POST com config definida
        const res = await fetch(url, config);

        // converte resposta
        json = await res.json();

        // alterna gatilho para atualizar dados (GET)
        setCallFetch((prev) => !prev);

        // execução do DELETE
      } else if (method === "DELETE") {
        // monta URL com id do item
        const deleteUrl = `${url}/${itemId}`;

        // executa requisição DELETE
        const res = await fetch(deleteUrl, config);

        // json-server não retorna body no DELETE
        // alterna gatilho para atualizar lista
        setCallFetch((prev) => !prev); // ✅ CORRIGIDO
      }
    };

    // executa requisição quando dependências mudam
    httpRequest();
  }, [config, method, url, itemId]);

  // retorna estados e função para uso no componente
  return { data, httpConfig, loading, error };
};
