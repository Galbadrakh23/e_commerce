"use client";
import React, { useState } from "react";

const ProductDetail = () => {
  return (
    <div className="flex gap-5">
      <aside className="flex flex-col gap-2 justify-center">
        <img
          src="\images\girl.png"
          alt=""
          className="rounded w-14 hover:border border-black"
        />
        <img
          src="\images\girl.png"
          alt=""
          className="rounded w-14 hover:border border-black"
        />
      </aside>
      <div>
        <img
          src="/images/image.png"
          alt=""
          className="rounded-2xl w-[420px] overflow-hidden "
        />
      </div>
    </div>
  );
};

export default ProductDetail;
