import { useGameContext } from "@/context/context-component";

export default function Score() {
  const { gameState } = useGameContext();
  const score = gameState.score;
  return (
    <div className="bg-white h-full flex flex-col px-8 py-4 rounded-lg items-center ">
      <p className="text-score text-sm ">score</p>
      <h2 className="text-score-num text-5xl">{score}</h2>
    </div>
  );
}
