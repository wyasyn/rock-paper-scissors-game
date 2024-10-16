import React from "react";

export const ShadowEffect = React.memo(() => (
  <>
    <div className=" absolute w-[300px] h-[300px] bg-white/5 backdrop-blur-md rounded-full top-1/2 left-1/2 animate-pulse -translate-x-1/2 -translate-y-1/2 " />
    <div className=" absolute w-[220px] h-[220px] bg-white/5 animate-pulse rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
    <div className=" absolute animate-pulse w-[170px] h-[170px] bg-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
  </>
));
