import { gamesData } from "@/api";
import { GameCard } from "../gameCard";

export function CardsGrid({games = gamesData}) {
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 my-4">
        {games.map((game: GameData, index: any) => (
          <GameCard key={index} developer={game.developer} freetogame_profile_url={game.freetogame_profile_url} game_url={game.game_url} id={game.id} title={game.title} thumbnail={game.thumbnail} short_description={game.short_description} genre={game.genre} platform={game.platform} publisher={game.publisher} release_date={game.release_date}/>
        ))}
      </div>
    </>
  );
}
