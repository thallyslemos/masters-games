"use client";
import { fetchWithTimeout } from "@/api";
import { CardsGrid, ErrorMessage,Loading } from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);
  const [error, setError] = useState({
    isErr: false,
    message: "Error",
    status: "",
  });

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
      .then((json) => setGames(json))
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BLUE-1 to-BLUE-2">
        App masters
      </div>
      {loading ? (
        <Loading />
      ) : error.isErr ? (
        <ErrorMessage errorMessage={error.message} errorTitle={`Erro ${error.status}`} />
      ) : (
        <>
          <CardsGrid games={games} />
        </>
      )}
    </main>
  );
}
