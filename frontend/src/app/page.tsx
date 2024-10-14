"use client";

import ProductLists from "@/components/main_page/product_lists";
import Carousel from "@/components/main_page/slider";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-auto   ">
      <Carousel />
      <ProductLists />
    </div>
  );
}
