import GameContent from "./game-content";
import Header from "./Header";

export default function Container() {
  return (
    <div className="p-8 w-full max-w-[768px] flex flex-col items-center gap-[3rem] mx-auto">
      <Header />
      {/* Game content */}
      <GameContent />
    </div>
  );
}
