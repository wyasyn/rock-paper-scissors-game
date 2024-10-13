import { useGameContext } from "@/context/context-component";
import RulesPage from "./rules-page";
import { AnimatePresence } from "framer-motion";

export default function Rules() {
  const { openRules, handleOpenRules } = useGameContext();
  return (
    <>
      <button
        className="absolute bottom-8 right-8 z-10 border-2 px-8 py-1 rounded-lg border-outline uppercase tracking-widest"
        onClick={handleOpenRules}
      >
        rules
      </button>
      <AnimatePresence>{openRules && <RulesPage />}</AnimatePresence>
    </>
  );
}
