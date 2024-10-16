import { useGameContext } from "@/context/context-component";
import MoveCard from "./Move";
import { PlayersList } from "@/lib/data";

export default function OutPut() {
  const { handlePlayAgain, playerMove, computerMove, result, gameState } =
    useGameContext();
  const players = PlayersList();
  const player = players.find((player) => player.name === playerMove);
  const computer = players.find((player) => player.name === computerMove);
  if (!player) return;
  const step = gameState.gameStep;

  return (
    <>
      {step > 0 && (
        <div className="mt-[5rem] md:mt-[7rem]">
          <div className="flex items-end justify-between tracking-widest cursor-not-allowed">
            <div className="flex flex-col gap-[5rem] sm:gap-[7rem] items-center ">
              <div className="relative">
                <MoveCard
                  name={player.name}
                  image={player.image}
                  showShadow={result === "You win!"}
                  bg={player.bg}
                  func={undefined}
                  position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              <h2 className="relative z-20">you picked</h2>
            </div>

            <div className="flex flex-col gap-[5rem] sm:gap-[7rem] items-center ">
              <div className="relative">
                {step >= 2 && computer ? (
                  <MoveCard
                    name={computer.name}
                    image={computer.image}
                    showShadow={result === "You lose!"}
                    bg={computer.bg}
                    position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                ) : (
                  <div className="w-[140px] h-[140px] rounded-full bg-gray-900/25 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                )}
              </div>

              <h2 className="relative z-20">the house picked</h2>
            </div>
          </div>

          {step === 3 && (
            <div className=" fixed left-1/2 -translate-x-1/2 bottom-[7rem] sm:bottom-[10rem]  text-center flex flex-col gap-6 items-center w-fit">
              <h2
                className={`text-5xl md:text-7xl ${
                  result === "You lose!"
                    ? "text-red-600"
                    : result === "You win!"
                    ? "text-emerald-500"
                    : "text-white"
                }`}
              >
                {result}
              </h2>
              <button
                className="bg-white text-score-num px-12 py-2 rounded-lg w-full uppercase tracking-widest hover:text-red-600 duration-300 ease-in-out"
                onClick={handlePlayAgain}
              >
                play again
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
