import { useContext } from "react";
import { GameContext } from "./context";

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("GameContext must be used within a GameProvider");
  }
  return context;
};
