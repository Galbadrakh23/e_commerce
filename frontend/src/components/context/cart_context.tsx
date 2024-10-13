"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICart, IInsertData, CartContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { ProductContext } from "./product_context";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData: {
    products: [
      {
        product: {
          name: "",
          category: "",
          comment: [],
          description: "",
          discount: 0,
          images: [],
          isNewProduct: true,
          price: 0,
          quantity: 0,
          size: "",
          _id: "",
        },
        quantity: 0,
        totalAmount: 0,
      },
    ],

    totalAmount: 0,
    productId: "",
  },
  setCartData: () => {},
  postCartData: () => {},
  count: 0,
  setCount: () => {},
  minus: () => {},
  add: () => {},
  cardData: () => {},
  // insertCartData: {
  //   productId: "",
  //   quantity: 0,
  //   totalAmount: 0,
  // },
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(0);

  const { product } = useContext(ProductContext);
  const [cartData, setCartData] = useState<ICart>({
    products: [
      {
        product: {
          name: "",
          category: "",
          comment: [],
          description: "",
          discount: 0,
          images: [],
          isNewProduct: true,
          price: 0,
          quantity: 0,
          size: "",
          _id: "",
        },
        quantity: 0,
        totalAmount: 0,
      },
    ],
    totalAmount: 0,
    productId: id,
  });

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  const cardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/api/v1/cart/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        // console.log("000000000", res.data.cartData.products);
        // setTableData(res.data.cartData.products);
        let cart = res.data.cartData;
        cart.products = cart.products.map((product: any) => ({
          ...product,
          totalAmount: product.quantity * product.product.price,
        }));
        setCartData(cart);
      }
    } catch (error) {
      console.log("Failed to get cart data", error);
    }
  };

  const postCartData = async () => {
    // const { productId } = insertCartData;
    try {
      const postingProduct = product.find((cur) => cur._id === id);

      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${apiUrl}/api/v1/cart/insert`,
        {
          productId: id,
          quantity: count,
          totalAmount: (postingProduct?.price || 0) * count,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Added to shopping cart successfully");
      }
    } catch (error) {
      console.log("cant fetch cart lists", error);
      toast.error("Failed to post cart data");
    }
  };
  // const updateCart = (cart) => {};

  // console.log("postedData", insertCartData);
  console.log("Count", count);
  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        postCartData,
        count,
        setCount,
        minus,
        add,
        cardData,
        // insertCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// cart
// get cart data
// add new product to cart
// remove product from cart
// minus, plus
