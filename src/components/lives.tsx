import { useGameContext } from "@/context/context-component";

export default function Lives() {
  const { gameState } = useGameContext();
  const lives = gameState.lives;
  return (
    <div
      className={`fixed bottom-8 left-12 px-4 py-1 rounded-lg z-10 ${
        lives < 3 ? "bg-red-600" : "bg-emerald-600"
      }`}
    >
      {lives < 10 ? `0${lives}` : lives} {lives === 1 ? "life" : "lives"}
    </div>
  );
}
