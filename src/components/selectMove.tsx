import triangle from "@/assets/images/bg-triangle.svg";

import MoveCard from "./Move";
import { PlayersList } from "@/lib/data";

export default function SelectMove() {
  const players = PlayersList();
  return (
    <div className="relative w-fit grid mx-auto place-items-center mt-[5rem] p-8">
      <div>
        <img src={triangle} alt="triangle" />
      </div>
      {players.map((player) => (
        <MoveCard key={player.name} {...player} />
      ))}
    </div>
  );
}
