import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-lg font-bold xl:text-3xl lg:text-2xl md:text-xl">
        {children}
      </h1>
      <progress className=" progress"></progress>
    </div>
  );
}
