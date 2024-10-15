import React from "react";
import { Card } from "../ui/card";

const SearchModalList = () => {
  return (
    <Card className="w-[638px] border-none rounded-xl flex justify-between hover:bg-accent mb-2">
      <div className="flex gap-4">
        <img src="/assets/chunky.png" alt="" className="rounded-xl w-12" />
        <div className="flex flex-col gap-1">
          <p className="text-base">Chunky Glyph Tee</p>
          <p className="text-sm font-bold">120’000₮</p>
        </div>
      </div>
    </Card>
  );
};

export default SearchModalList;
