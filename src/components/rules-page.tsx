import rules from "@/assets/images/image-rules.svg";
import close from "@/assets/images/icon-close.svg";
import { useGameContext } from "@/context/context-component";
import { motion } from "framer-motion";

export default function RulesPage() {
  const { handleOpenRules } = useGameContext();
  return (
    <motion.div
      className="fixed inset-0 bg-black/15 backdrop-blur-sm grid place-items-center z-50"
      key="rules"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="bg-white p-8 rounded-lg">
        <div className="text-score-num flex items-center justify-between mb-6">
          <h2 className=" text-2xl tracking-wider ">Rules</h2>
          <button onClick={handleOpenRules}>
            <img src={close} alt="close" />
          </button>
        </div>
        <img src={rules} alt="rules image" />
      </div>
    </motion.div>
  );
}
