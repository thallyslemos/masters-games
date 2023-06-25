import { GameData } from "@/types/gameData";
import Image from "next/image";

export function GameCard({thumbnail, title,short_description, platform, publisher, release_date, developer, freetogame_profile_url, game_url, genre}: GameData){
    return(
        <div
            className="w-full p-2 rounded-lg drop-shadow-xl max-w-xs relative group overflow-hidden bg-gradient-to-t to-LIGTH-BLUE from-white"
          
          >
            <div className="overflow-hidden rounded-t-md">

            <Image width={350} height={180}
              className="w-full group-hover:scale-105 transition-all duration-300"
              src={thumbnail}
              alt="image"
            />
            </div>
            <div className="pl-2 mb-12 ">
              <h4 className="text-xl font-semibold tracking-tight text-DARK-BLUE">
                {title}
              </h4>
              <p className="mb-2 text-sm text-GREY-BLUE leading-normal">{short_description}</p>
              <p className="mb-1 text-sm text-GREY-BLUE leading-normal">genre: {genre}</p>
              <p className="mb-1 text-sm text-GREY-BLUE leading-normal">platform: {platform}</p>
              <p className="mb-1 text-sm text-GREY-BLUE leading-normal">publisher: {publisher}</p>
              <p className="mb-1 text-sm text-GREY-BLUE leading-normal">
                release_date: {release_date}
              </p>
              <p className="mb-1 text-sm text-GREY-BLUE leading-normal">Developer: {developer}</p>
            </div>
            <div className="w-full flex absolute bottom-0 left-0  ">
              <div className="w-1/2 text-center py-2 text-sm font-semibold text-LIGTH-BLUE bg-gradient-to-t from-BLUE-1 to-BLUE-2 hover:font-bold hover:text-white transition-all shadow">
                <a
                  className="w-full h-full"
                  href={game_url}
                  target="_blank"
                >
                  Go To Site
                </a>
              </div>
              <div className="w-1/2 text-center py-2 text-sm font-semibold text-blue-100 bg-gradient-to-t from-BLUE-1 to-BLUE-2 hover:font-bold hover:text-white transition-all shadow">
                <a
                  className="w-full h-full"
                  href={freetogame_profile_url}
                  target="_blank"
                >
                  Free To Game Profile
                </a>
              </div>
            </div>
          </div>
    )
}