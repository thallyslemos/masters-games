"use client";
import { fetchWithTimeout } from "@/api";
import {
  CardsGrid,
  ErrorMessage,
  Loading,
  TextButton,
  TextInput,
} from "@/components";
import { GameData } from "@/types/gameData";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState({
    isErr: false,
    message: "Error",
    status: "",
  });
  const [q, setQ] = useState("");
  const searchResult = useRef<GameData[]>([]);

  useEffect(() => {
    fetchWithTimeout(
      "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
      {
        method: "GET",
        headers: { "dev-email-address": "thallys@thallys.com" },
      },
      5000
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.status / 100 >= 5
            ? setError({
                isErr: true,
                message:
                  "O servidor fahou em responder, tente recarregar a página",
                status: `${response.status}`,
              })
            : setError({
                isErr: true,
                message:
                  "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde",
                status: `${response.status}`,
              });
        }
      })
      .then((json) => {
        setGames(json);
        searchResult.current = json;
      })
      .catch((e: DOMException) => {
        if (e.name == "AbortError") {
          setError({
            isErr: true,
            message: "O servidor demorou para responder, tente mais tarde",
            status: "AbortError",
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  function handleSearch(item: GameData[]) {
    searchResult.current = item.filter((item: GameData) => {
      if (item.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return item;
      }
      setQ(' ');
    });
  }

  function handleChange(e: any) {
    e.preventDefault()
    const newValue = e.target.value;
    setQ(newValue);
  }

  function clearSearch() {
    setQ('')
    searchResult.current = []
    handleSearch(games);
  }
  console.log(searchResult)
  console.log(q)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row my-2">
        {/* <TextInput onInputChange={handleInputChange} /> */}
        <div className="flex border border-LIGTH-BLUE rounded">
      <input
        type="text"
        className="block w-full px-4 py-2 text-BLUE-1 bg-white border rounded-md focus:border-BLUE-2 focus:ring-LIGTH-BLUE focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Pesquisar..."
        value={q}
        onChange={(e) =>handleChange(e)}
      />
    </div>
        <TextButton title="Pesquisar" onClickButton={() => handleSearch(games)} />
        <TextButton title="Limpar" onClickButton={() => (clearSearch())} />
      </div>
      {loading ? (
        <Loading />
      ) : error.isErr ? (
        <ErrorMessage
          errorMessage={error.message}
          errorTitle={`Erro ${error.status}`}
        />
      ) : searchResult.current.length > 0 ? (
        <>
          <CardsGrid games={searchResult.current} />
        </>
      ) : (
        <ErrorMessage
          errorMessage="Não foram encontrados títulos para a pesquisa informada"
          errorTitle="Erro na pesquisa"
        />
      )}
    </main>
  );
}
