import React, { useContext } from "react";
import { ProductCard } from "@/components/card/card";
import { ProductContext } from "@/components/context/product_context";
import Link from "next/link";

const ProductLists = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto my-5 gap-4">
      {product?.map((c, i) =>
        i === 6 || i === 7 ? (
          <div className="col-span-2 row-span-2">
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
            />
          </div>
        ) : (
          <div className="col-span-1 row-span-1">
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ProductLists;
