"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICategory, CategoryContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";

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
      const res = await axios.get(`${apiUrl}/api/v1/category`);
      if (res.status === 200) {
        setCategory(res.data.category);
      }
    } catch (error) {
      console.log("cant fetch category lists", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  console.log("All Categories", category);
  return (
    <CategoryContext.Provider value={{ category, fetchCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};
