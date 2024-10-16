import { Move } from "@/context/context";
import { ShadowEffect } from "./ShadowEffect";

export type MoveProps = {
  name: Move;
  image: string;
  bg: string;
  position: string;
  showShadow: boolean;
  func?: () => void;
};

export default function MoveCard({
  name,
  image,
  bg,
  func,
  position,
  showShadow,
}: MoveProps) {
  return (
    <div
      role="button"
      aria-label={`Select ${name}`}
      className={`absolute cursor-pointer ${position}`}
      onClick={func}
    >
      {showShadow && <ShadowEffect />}

      <div
        className={` absolute w-[140px] h-[140px] ${bg} rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0px_-6px_0px_0px_rgba(0,0,0,0.15)]  `}
      />

      <div
        className={`absolute bg-white w-[100px] h-[100px] rounded-full grid place-items-center shadow-[inset_0px_6px_0px_0px_rgba(0,0,0,0.15)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
