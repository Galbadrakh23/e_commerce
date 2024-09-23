import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="w-full bg-black py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-10 px-8 items-center">
            <div className="flex gap-2 items-center">
              <span className="w-10">
                <img src="./assets/Vector.svg" alt="logo" />
              </span>
              <p className="text-[#FFFFFF] font-normal text-sm">ECOMMERCE</p>
            </div>
            <div>
              <p className="text-[#FFFFFF] font-normal text-sm opacity-50">
                Ангилал
              </p>
            </div>
          </div>
          <div className="relative flex items-center">
            <Search size={20} className="text-[#FAFAFA] absolute left-4" />
            <Input
              type="text"
              placeholder="Бүтээгдэхүүн хайх"
              className="rounded-full w-80 pl-12"
            />
          </div>

          <div className="pr-10 flex gap-6 items-center">
            <span className="text-[#FFFFFF]">
              <Heart />
            </span>
            <span className="text-[#FFFFFF]">
              <ShoppingCart />
            </span>
            <div className="flex gap-2"></div>
            <div className="text-[#FFFFFF]">
              <Link href="/profile">
                <User />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
