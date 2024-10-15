import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { IoMdHeart } from "react-icons/io";

const Wishlist = () => {
  return (
    <div className="my-5 ">
      <Card className="w- h-[132px] m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="/assets/chunky.png" alt="" className="rounded-xl w-24" />
          <div className="flex flex-col justify-between">
            <p className="text-base">Chunky Glyph Tee</p>
            <p className="text-sm font-bold">120’000₮</p>
            <Button
              variant={"outline"}
              className="bg-[#2563EB] text-white text-sm w-20 rounded-full"
              size="sm"
            >
              Сагслах
            </Button>
          </div>
        </div>
        <IoMdHeart className=" text-xl" />
      </Card>
    </div>
  );
};

export default Wishlist;
