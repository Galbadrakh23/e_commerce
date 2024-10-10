import Wishlist from "@/components/wishlist";
import React from "react";

const SavedProduct = () => {
  return (
    <div className="w-1/2 h-[calc(100vh-290px)] m-auto pt-16">
      <h2 className="text-xl font-bold mb-4">Хадгалсан бараа (3) </h2>
      <Wishlist />
      <Wishlist />
      <Wishlist />
    </div>
  );
};

export default SavedProduct;
