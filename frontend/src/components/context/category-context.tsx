"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICategory, CategoryContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type CategoryProviderProps = {
  children: React.ReactNode;
};

export const CategoryContext = createContext<CategoryContextType>({
  category: [],
  fetchCategoryData: () => {},
});

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState<ICategory[]>([]);

  //   const [Category, setCategory] = useState<ICategory[]>([]);

  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/categories`);
      if (res.status === 200) {
        // toast.success("Get categories successfully");
        // const { category } = res.data;
        setCategory(res.data.category);
        // console.log("RESCAT", res.data.category);
      }
    } catch (error) {
      console.log("cant fetch category lists", error);
      // toast.error("Failed to fetch category data");
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  console.log("CAT", category);
  return (
    <CategoryContext.Provider value={{ category, fetchCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};
