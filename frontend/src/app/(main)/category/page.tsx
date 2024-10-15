"use client";
import { CategoryLabel } from "@/components/caterogry/index";
import { SizeLabel } from "@/components/caterogry/size_label";
import React, { useContext } from "react";
import { ProductContext } from "@/components/context/product_context";
import { ProductCard } from "@/components/card/card";
const CategoryPage = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="mt-16 mb-24 w-3/4 m-auto">
      <div className="flex gap-32">
        <aside className="flex flex-col gap-12">
          <CategoryLabel />
          <SizeLabel />
        </aside>
        <main className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
          {product?.map((c) => (
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
              image={c.images[0]}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
