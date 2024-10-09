"use client";
import { ProductCard } from "@/components/card/card";
// import RatingSection from "@/components/category/rating";
import { ProductContext } from "@/components/context/product_context";
import ProductDetail from "@/components/product-detail/product-detail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Heart } from "lucide-react";

const ProductDetailPage = () => {
  const { product } = useContext(ProductContext);
  const [count, setCount] = useState<number>(0);
  const [seeComments, setSeeComments] = useState<boolean>(false);

  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  const seeAllComments = () => {
    setSeeComments(!seeComments);
  };

  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const value = 3.5;

  return (
    <main className="w-1/2 m-auto">
      <div className="mt-16 mb-20 grid grid-cols-2 gap-5">
        <ProductDetail />
        <div className="flex flex-col gap-3 justify-end ">
          <Badge className="bg-transparent text-black border border-blue-500 w-14 text-xs font-semibold">
            Шинэ
          </Badge>
          <h2 className="font-bold text-2xl flex flex-row items-center gap-4">
            Wildflower Hoodie <Heart />
          </h2>
          <p>Зэрлэг цэцгийн зурагтай даавуун цамц</p>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-base underline">Хэмжээний загвар</p>
            <div className="flex gap-2">
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                S
              </Button>
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                M
              </Button>
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                L
              </Button>
              <Button className="rounded-full bg-gray-700 border border-black text-black dark:text-white dark:border-white w-8 h-8">
                XL
              </Button>
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                2XL
              </Button>
            </div>
            <div className="mt-4">
              <Button
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                onClick={minus}
              >
                -
              </Button>
              <Label className="4xl mx-4">{count}</Label>
              <Button
                onClick={add}
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
              >
                +
              </Button>
            </div>
          </div>
          <div className="mt-6 mb-14">
            <p className="text-xl font-bold mb-2">120,000₮</p>
            <Button className="bg-[#2563EB] rounded-full px-8" size="sm">
              Сагсанд нэмэх
            </Button>
          </div>
          <div>
            <div className="mb-1">
              <span className="mr-2 text-sm">Үнэлгээ</span>
              <Button
                className="text-sm text-[#2563EB] underline"
                variant="ghost"
                onClick={seeAllComments}
              >
                бүгдийг харах
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  className="text-[#FDE047]"
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ color: "#e0e0e0" }} fontSize="inherit" />
                  }
                />
                {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
              </Box>
              <span className="text-sm text-[#09090B]">4.6</span>
              <span className="text-sm">(24)</span>
            </div>
          </div>
        </div>
        <div></div>
        {/* <div>{seeComments ? <RatingSection /> : <div></div>}</div> */}
      </div>
      <div className="mb-24">
        <h1 className="text-3xl font-bold mb-6">Холбоотой бараа</h1>
        <div className="grid grid-cols-4 gap-8">
          {product?.map((c) => (
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
