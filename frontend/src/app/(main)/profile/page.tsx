"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl"> Хадгалсан бараа </h1>
      <div className="flex justify-center"></div>
    </div>
  );
}
