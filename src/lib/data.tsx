import rock from "@/assets/images/icon-rock.svg";
import paper from "@/assets/images/icon-paper.svg";
import scissors from "@/assets/images/icon-scissors.svg";
import { MoveProps } from "@/components/Move";
import { Move } from "@/context/context";
import { useGameContext } from "@/context/context-component";

export const PlayersList = () => {
  const { handleGameState } = useGameContext();

  const players: MoveProps[] = [
    {
      name: Move.Rock,
      image: rock,
      position: " bottom-[70px] left-1/2 -translate-x-1/2",
      bg: "bg-rock-one",
      showShadow: false,
      func: () => handleGameState(Move.Rock),
    },
    {
      name: Move.Paper,
      image: paper,
      position: "top-[50px] left-[50px]",
      bg: "bg-paper-one",
      showShadow: false,
      func: () => handleGameState(Move.Paper),
    },
    {
      name: Move.Scissors,
      image: scissors,
      position: "top-[50px] right-[50px]",
      bg: "bg-scissors-one",
      showShadow: false,
      func: () => handleGameState(Move.Scissors),
    },
  ];

  return players;
};
