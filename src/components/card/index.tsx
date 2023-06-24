import { gamesData } from "@/api";

export function CardsGrid() {
const games = gamesData;
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 my-4">
        {games.map((game, index) => (
          <div
            className="w-full p-2 rounded-lg shadow-xl max-w-xs relative group overflow-hidden"
            key={index}
          >
            <div className="overflow-hidden rounded-t-md">

            <img
              className="w-full group-hover:scale-105 transition-all duration-300 "
              src={game.thumbnail}
              alt="image"
            />
            </div>
            <div className="pl-2 mb-10 ">
              <h4 className="text-xl font-semibold tracking-tight text-BLUE-1">
                {game.title}
              </h4>
              <p className="mb-2 text-sm text-slate-600 leading-normal">{game.short_description}</p>
              <p className="mb-1 text-sm text-slate-600 leading-normal">platform: {game.platform}</p>
              <p className="mb-1 text-sm text-slate-600 leading-normal">publisher: {game.publisher}</p>
              <p className="mb-1 text-sm text-slate-600 leading-normal">
                release_date: {game.release_date}
              </p>
              <p className="mb-1 text-sm text-slate-600 leading-normal">Developer: {game.developer}</p>
            </div>
            <div className="w-full flex absolute bottom-0 left-0  ">
              <div className="w-1/2 text-center py-2 text-sm font-semibold text-blue-100 bg-gradient-to-t from-BLUE-1 to-BLUE-2 hover:font-bold hover:text-white transition-all shadow">
                <a
                  className="w-full h-full"
                  href={game.game_url}
                  target="_blank"
                >
                  Go To Site
                </a>
              </div>
              <div className="w-1/2 text-center py-2 text-sm font-semibold text-blue-100 bg-gradient-to-t from-BLUE-1 to-BLUE-2 hover:font-bold hover:text-white transition-all shadow">
                <a
                  className="w-full h-full"
                  href={game.freetogame_profile_url}
                  target="_blank"
                >
                  Free To Game Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
