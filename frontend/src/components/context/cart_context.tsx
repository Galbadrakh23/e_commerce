"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICart, CartContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData: {
    name: "",
    price: 0,
    quantity: 0,
    discount: 0,
    image: "",
    user: "",
  },
  setCartData: () => {},
  postCartData: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartData, setCartData] = useState<ICart>({
    name: "",
    price: 0,
    quantity: 0,
    discount: 0,
    image: "",
    user: "",
  });

  //   const [product, setProduct] = useState<IProduct[]>([]);

  const postCartData = async () => {
    const { name, price, quantity, discount, image } = cartData;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/insert`, {
        name,
        image,
      });
      if (res.status === 200) {
        toast.success("Added to shopping cart successfully");
      }
    } catch (error) {
      console.log("cant fetch cart lists", error);
      toast.error("Failed to post cart data");
    }
  };

  // useEffect(() => {
  //   postCartData();
  // }, []);

  console.log("CD", cartData);
  return (
    <CartContext.Provider value={{ cartData, setCartData, postCartData }}>
      {children}
    </CartContext.Provider>
  );
};
