"use client";
import React, { useState } from "react";

const ProductDetail = () => {
  return (
    <div className="flex gap-5">
      <aside className="flex flex-col gap-2 justify-start mt-24">
        <img
          src="/assets/wildflower.png"
          alt=""
          className="rounded w-20 hover:border border-black"
        />
        <img
          src="/assets/wildflower.png"
          alt=""
          className="rounded w-14 hover:border border-black"
        />
        <img
          src="/assets/wildflower.png"
          alt=""
          className="rounded w-14 hover:border border-black"
        />
        <img
          src="/assets/wildflower.png"
          alt=""
          className="rounded w-14 hover:border border-black"
        />
      </aside>
      <div>
        <img
          src="/assets/wildflower.png"
          alt=""
          className="rounded-xl w-[426px] overflow-hidden "
        />
      </div>
    </div>
  );
};

export default ProductDetail;
