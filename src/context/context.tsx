import { createContext, ReactNode, useEffect, useState } from "react";
import Confetti from "react-confetti";

// Possible moves in the game
export enum Move {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

interface GameState {
  score: number;
  lives: number;
  level: number;
  gameStep: number;
}

interface GameContextProps {
  openRules: boolean;
  gameState: GameState;
  playerMove: Move | null;
  computerMove: Move | null;
  result: string | null;
  handleOpenRules: () => void;
  handleGameState: (playerChoice: Move) => void;
  handlePlayAgain: () => void;
}

const initialState: GameState = {
  score: 0,
  lives: 5,
  level: 1,
  gameStep: 0,
};

export const GameContext = createContext<GameContextProps | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedGameState = localStorage.getItem("gameState");
    return savedGameState ? JSON.parse(savedGameState) : initialState;
  });
  const [openRules, setOpenRules] = useState<boolean>(false);
  const [playerMove, setPlayerMove] = useState<Move | null>(() => {
    const savedPlayerMove = localStorage.getItem("playerMove");
    return savedPlayerMove ? (savedPlayerMove as Move) : null;
  });
  const [computerMove, setComputerMove] = useState<Move | null>(() => {
    const savedComputerMove = localStorage.getItem("computerMove");
    return savedComputerMove ? (savedComputerMove as Move) : null;
  });
  const [result, setResult] = useState<string | null>(() => {
    const savedResult = localStorage.getItem("result");
    return savedResult || null;
  });
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Save game state, player move, computer move, and result to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    if (playerMove) {
      localStorage.setItem("playerMove", playerMove);
    }
  }, [playerMove]);

  useEffect(() => {
    if (computerMove) {
      localStorage.setItem("computerMove", computerMove);
    }
  }, [computerMove]);

  useEffect(() => {
    if (result) {
      localStorage.setItem("result", result);
    }
  }, [result]);

  const handleOpenRules = () => {
    setOpenRules(!openRules);
  };

  const getRandomMove = (): Move => {
    const moves: Move[] = [Move.Rock, Move.Paper, Move.Scissors];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const determineWinner = (player: Move, computer: Move) => {
    if (player === computer) return "draw";
    if (
      (player === Move.Rock && computer === Move.Scissors) ||
      (player === Move.Scissors && computer === Move.Paper) ||
      (player === Move.Paper && computer === Move.Rock)
    ) {
      return "win";
    }
    return "lose";
  };

  const handleGameState = (playerChoice: Move) => {
    setPlayerMove(playerChoice);
    setGameState((prevState: GameState) => ({
      ...prevState,
      gameStep: 1, // Step 1: Player makes a move
    }));

    // Delay before revealing the computer's move
    setTimeout(() => {
      const computerChoice = getRandomMove();
      setComputerMove(computerChoice);
      setGameState((prevState: GameState) => ({
        ...prevState,
        gameStep: 2, // Step 2: Determine computer's move
      }));

      // Delay before showing result
      setTimeout(() => {
        const outcome = determineWinner(playerChoice, computerChoice);

        if (outcome === "win") {
          setGameState((prevState: GameState) => ({
            ...prevState,
            score: prevState.score + 1,
            gameStep: 3, // Step 3: Show result
          }));
          setResult("You win!");
          setShowConfetti(true); // Trigger confetti

          // Hide confetti after a few seconds
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000); // Confetti will display for 3 seconds
        } else if (outcome === "lose") {
          setGameState((prevState: GameState) => ({
            ...prevState,
            lives: prevState.lives - 1,
            gameStep: 3, // Step 3: Show result
          }));
          setResult("You lose!");
        } else {
          setResult("It's a draw!");
          setGameState((prevState: GameState) => ({
            ...prevState,
            gameStep: 3, // Step 3: Show result
          }));
        }

        // Check if the game is over
        if (gameState.lives - 1 <= 0) {
          setTimeout(() => {
            setGameState(initialState);
            setResult("Game over! Restarting...");
            localStorage.removeItem("gameState");
            localStorage.removeItem("playerMove");
            localStorage.removeItem("computerMove");
            localStorage.removeItem("result");
          }, 1000); // Delay the reset to allow the final result to render
        }
      }, 1000); // Delay before showing result
    }, 1000); // Delay before revealing computer's move
  };

  const handlePlayAgain = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setResult(null);
    localStorage.removeItem("playerMove");
    localStorage.removeItem("computerMove");
    localStorage.removeItem("result");
    setGameState((prevState) => ({
      ...prevState,
      gameStep: 0,
    }));
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
        handlePlayAgain,
      }}
    >
      {children}
      {showConfetti && <Confetti />}{" "}
      {/* Display confetti when the player wins */}
    </GameContext.Provider>
  );
};
