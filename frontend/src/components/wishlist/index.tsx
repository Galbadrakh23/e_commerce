import React, { useContext } from "react";
import { Card } from "../ui/card";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { IoMdHeart } from "react-icons/io";
import { WishListProps } from "@/interface";
import { WishListContext } from "../context/wishlist_context";
import Link from "next/link";

const Wishlist = ({ name, price, images, _id }: WishListProps) => {
  const { deleteList } = useContext(WishListContext);
  return (
    <div className="my-5 ">
      <Card className="w- h-[132px] m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src={images[0]} alt="" className="rounded-xl w-24" />
          <div className="flex flex-col justify-between">
            <p className="text-base">{name}</p>
            <p className="text-sm font-bold">
              {Intl.NumberFormat().format(price)}₮
            </p>
            <Link href={"/product/" + _id}>
              <Button
                variant={"outline"}
                className="bg-[#2563EB] text-white text-sm w-20 rounded-full"
                size="sm"
              >
                Сагслах
              </Button>
            </Link>
          </div>
        </div>
        <IoMdHeart className=" text-xl" />
      </Card>
    </div>
  );
};

export default Wishlist;
