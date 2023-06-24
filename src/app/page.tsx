"use client";
import { CardsGrid } from "@/components/cardsGrid";
import { Loading } from "@/components/loading";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);

  useEffect(() => {
    fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
      method: "GET",
      headers: { "dev-email-address": "thallys@thallys.com" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => setGames(json))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BLUE-1 to-BLUE-2">
        App masters
      </div> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardsGrid games={games} />
        </>
      )}
    </main>
  );
}
