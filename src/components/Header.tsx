import logo from "@/assets/images/logo.svg";
import Score from "./score";
export default function Header() {
  return (
    <header className=" relative z-50 w-full flex flex-col gap-4 sm:flex-row items-center sm:justify-between sm:gap-[7rem] border-2 border-outline rounded-xl px-8 py-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Score />
    </header>
  );
}
