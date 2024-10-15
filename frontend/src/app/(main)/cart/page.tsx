import React, { useContext } from "react";
import { IoMdHeart, IoMdTrash } from "react-icons/io";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/components/context/cart_context";
import { Label } from "@/components/ui/label";

const CartProducts = () => {
  return (
    <div className="my-5 w-4/4 mt-4 bg-white flex flex-col items-center mb-20">
      <div className="w-[256px] flex flex-row my-4 justify-between">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-[#FFFFFF] border">
          1
        </span>
        <span className="w-8 h-8 flex items-center justify-center rounded-full border-black text-[#000000] border">
          2
        </span>
        <span className="w-8 h-8 flex items-center justify-center rounded-full border-black text-[#000000] border">
          3
        </span>
      </div>
      <Card className="w-[638px] h-[132px] m-auto  dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="/assets/chunky.png" alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">Chunky Glyph Tee</p>
            <div className="mt-2">
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                -
              </Button>
              <Label className="4xl mx-4"> 1 </Label>
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                +
              </Button>
              <p className="text-sm font-bold">120’000₮</p>
            </div>
          </div>
        </div>
        <IoMdTrash className=" text-xl" />
      </Card>
      <Card className="w-[638px] h-[132px] m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="/assets/chunky.png" alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">Chunky Glyph Tee</p>
            <p className="text-sm font-bold">120’000₮</p>
          </div>
        </div>
        <IoMdTrash className=" text-xl" />
      </Card>
      <Card className="w-[638px] h-[132px] m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="/assets/chunky.png" alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">Chunky Glyph Tee</p>
            <p className="text-sm font-bold">120’000₮</p>
          </div>
        </div>
        <IoMdTrash className=" text-xl" />
      </Card>
    </div>
  );
};

export default CartProducts;
