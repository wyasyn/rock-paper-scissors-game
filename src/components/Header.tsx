import logo from "@/assets/images/logo.svg";
import Score from "./score";
export default function Header() {
  return (
    <header className=" w-full flex items-center justify-between gap-[7rem] border-2 border-outline rounded-xl px-8 py-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Score />
    </header>
  );
}
