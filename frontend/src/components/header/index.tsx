"use client";

import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/components/context/user-context";
import SearchModalList from "@/components/search_modal/index";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
    toast.warning("Successfully log out");
  };

  return (
    <header>
      <div className="w-full bg-black py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-10 px-8 items-center">
            <div className="flex gap-2 items-center">
              <span className="w-10">
                <img src="./assets/Vector.svg" alt="logo" />
              </span>
              <Link href="./" className="text-[#FFFFFF] font-normal text-sm">
                ECOMMERCE
              </Link>
            </div>
            <div>
              <Link
                href="./category"
                className="text-[#FFFFFF] font-normal text-sm opacity-50"
              >
                Ангилал
              </Link>
            </div>
          </div>
          <div className="relative flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Search
                  size={20}
                  className="text-[#FAFAFA] absolute left-4 top-2.5"
                />
                <Input
                  type="text"
                  placeholder="Бүтээгдэхүүн хайх"
                  className="rounded-full w-80 pl-12 text-[#FFFFFF]"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl p-6">
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="pr-10 flex gap-6 items-center justify-center">
            <span className="text-[#FFFFFF]">
              <Link href="/saved">
                <Heart />
              </Link>
            </span>
            <span className="text-[#FFFFFF]">
              <Link href="/cart">
                <ShoppingCart />
              </Link>
            </span>
            {user ? (
              <div className="text-[#FFFFFF] mt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <User />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/user_profile">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/saved">
                      <DropdownMenuItem>Wishlist</DropdownMenuItem>
                    </Link>
                    <Link href="/cart">
                      <DropdownMenuItem>Card</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <button onClick={logOut}>Logout</button>
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
