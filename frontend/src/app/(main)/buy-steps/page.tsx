"use client";
import React, { useContext, useEffect } from "react";
import { WishListContext } from "@/components/context/wishlist_context";
import { CartContext } from "@/components/context/cart_context";
import Wishlist from "@/components/wishlist";

const SavedProduct = () => {
  const { wishListData, getWishListData, deleteList } =
    useContext(WishListContext);
  const { refetch } = useContext(CartContext);
  useEffect(() => {
    getWishListData();
  }, [refetch]);

  return (
    <div className="w-1/2 h-[calc(100vh-290px)] m-auto pt-16">
      <h2 className="text-xl font-bold mb-4">
        Хадгалсан бараа ({wishListData.products.length}){" "}
      </h2>
      {wishListData.products?.map((data) => (
        <Wishlist
          name={data.product.name}
          price={data.product.price}
          _id={data.product._id}
          images={data.product.images}
        />
      ))}
    </div>
  );
};

export default SavedProduct;
