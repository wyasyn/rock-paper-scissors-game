import { createContext, ReactNode, useState } from "react";

// Possible moves in the game
type Move = "rock" | "paper" | "scissors";

interface GameContextProps {
  openRules: boolean;
  gameState: { score: number; lives: number; level: number };
  playerMove: Move | null;
  computerMove: Move | null;
  result: string | null;
  handleOpenRules: () => void;
  handleGameState: (playerChoice: Move) => void;
}

export const GameContext = createContext<GameContextProps | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState({
    score: 0,
    lives: 3,
    level: 1,
  });
  const [openRules, setOpenRules] = useState<boolean>(false);
  const [playerMove, setPlayerMove] = useState<Move | null>(null);
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleOpenRules = () => {
    setOpenRules(!openRules);
  };

  const getRandomMove = (): Move => {
    const moves: Move[] = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const determineWinner = (player: Move, computer: Move) => {
    if (player === computer) return "draw";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      return "win";
    }
    return "lose";
  };

  const handleGameState = (playerChoice: Move) => {
    const computerChoice = getRandomMove();
    setPlayerMove(playerChoice);
    setComputerMove(computerChoice);

    const outcome = determineWinner(playerChoice, computerChoice);

    if (outcome === "win") {
      setGameState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
      setResult("You win!");
    } else if (outcome === "lose") {
      setGameState((prevState) => ({
        ...prevState,
        lives: prevState.lives - 1,
      }));
      setResult("You lose!");
    } else {
      setResult("It's a draw!");
    }

    // Check if the game is over
    if (gameState.lives <= 1) {
      // Reset game or handle end-game logic here
      setGameState({ score: 0, lives: 3, level: gameState.level });
      setResult("Game over! Restarting...");
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        openRules,
        playerMove,
        computerMove,
        result,
        handleOpenRules,
        handleGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
