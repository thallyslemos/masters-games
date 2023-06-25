export async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);

  return response;
}
export const gamesData = [
    {
      id: 540,
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      developer: "Blizzard Entertainment",
      release_date: "2022-10-04",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    },
    {
      id: 521,
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
    },
    {
      id: 517,
      title: "Lost Ark",
      thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
      short_description:
        "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
      game_url: "https://www.freetogame.com/open/lost-ark",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Amazon Games",
      developer: "Smilegate RPG",
      release_date: "2022-02-11",
      freetogame_profile_url: "https://www.freetogame.com/lost-ark",
    },
    {
      id: 516,
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description:
        "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      game_url: "https://www.freetogame.com/open/pubg",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "KRAFTON, Inc.",
      developer: "KRAFTON, Inc.",
      release_date: "2022-01-12",
      freetogame_profile_url: "https://www.freetogame.com/pubg",
    },
    {
      id: 508,
      title: "Enlisted",
      thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
      short_description:
        "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
      game_url: "https://www.freetogame.com/open/enlisted",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Entertainment",
      developer: "Darkflow Software",
      release_date: "2021-04-08",
      freetogame_profile_url: "https://www.freetogame.com/enlisted",
    },
    {
      id: 525,
      title: "MultiVersus",
      thumbnail: "https://www.freetogame.com/g/525/thumbnail.jpg",
      short_description:
        "The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.",
      game_url: "https://www.freetogame.com/open/multiversus",
      genre: "Fighting",
      platform: "PC (Windows)",
      publisher: "Warner Bros. Games",
      developer: "Player First Games",
      release_date: "2022-07-19",
      freetogame_profile_url: "https://www.freetogame.com/multiversus",
    },
    {
      id: 475,
      title: "Genshin Impact",
      thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
      short_description:
        "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
      game_url: "https://www.freetogame.com/open/genshin-impact",
      genre: "Action RPG",
      platform: "PC (Windows)",
      publisher: "miHoYo",
      developer: "miHoYo",
      release_date: "2020-09-28",
      freetogame_profile_url: "https://www.freetogame.com/genshin-impact",
    },
    {
      id: 523,
      title: "Fall Guys",
      thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
      short_description:
        "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
      game_url: "https://www.freetogame.com/open/fall-guys",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Mediatonic",
      developer: "Mediatonic",
      release_date: "2020-08-04",
      freetogame_profile_url: "https://www.freetogame.com/fall-guys",
    },
  ];