import { useGameContext } from "@/context/context-component";
import SelectMove from "./selectMove";
import OutPut from "./outPut";

export default function GameContent() {
  const { gameState } = useGameContext();
  const step = gameState.gameStep;
  return (
    <section className=" w-full">
      {step < 1 ? <SelectMove /> : <OutPut />}
    </section>
  );
}
