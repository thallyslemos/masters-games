"use client";
import { fetchWithTimeout } from "@/api";
import { CardsGrid } from "@/components/cardsGrid";
import { Loading } from "@/components/loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);
  const [error, setError] = useState([false, ""]);

  useEffect(() => {
    fetchWithTimeout("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
      method: "GET",
      headers: { "dev-email-address": "thallys@thallys.com" },
      timeout: 2000
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.status / 100 >= 5
            ? setError([
                true,
                "O servidor fahou em responder, tente recarregar a página",
              ])
            : setError([
                true,
                "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde",
              ]);
        }
      })
      .then((json) => setGames(json))
      .catch((e:DOMException) => {if(e.name == 'AbortError'){setError([true, "O servidor demorou para responder, tente mais tarde"])}})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BLUE-1 to-BLUE-2">
        App masters
      </div>
      {loading ? (
        <Loading />
      ) : error[0] ? (
        <div role="alert" className="m-auto px-2">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Erro
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{error[1]}</p>
          </div>
        </div>
      ) : (
        <>
          <CardsGrid games={games} />
        </>
      )}
    </main>
  );
}
