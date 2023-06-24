import { gamesData } from "@/api";
import { CardsGrid } from "@/components/cardsGrid";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-BLUE-1 to-BLUE-2">

      App masters
      </div>
      <CardsGrid games={gamesData}/>
    </main>
  );
}
