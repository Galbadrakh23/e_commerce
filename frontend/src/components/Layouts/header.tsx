"use client";

import React, { useContext, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/context/user-context";

const Header = () => {
  const { token, setToken } = useContext(UserContext);
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const ss = localStorage.getItem("token") || "";
    setToken(ss);
  }, []);

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

          <div className="pr-10 flex gap-6 items-center justify-center">
            <span className="text-[#FFFFFF]">
              <Heart />
            </span>
            <span className="text-[#FFFFFF]">
              <ShoppingCart />
            </span>
            {token ? (
              <div className="text-[#FFFFFF] mt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <User />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/profile">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Wishlist</DropdownMenuItem>
                    <DropdownMenuItem>Card</DropdownMenuItem>
                    <DropdownMenuItem>
                      <button onClick={logOut}>Гарах</button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/signup">
                  <Button
                    variant="outline"
                    className="border-[#2563EB] rounded-full text-[#FFFFFF]"
                  >
                    Бүртгүүлэх
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    className="bg-[#2563EB] rounded-full"
                    variant="destructive"
                  >
                    Нэвтрэх
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
