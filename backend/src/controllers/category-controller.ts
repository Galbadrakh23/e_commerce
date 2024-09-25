import { Request, Response } from "express";

import Category from "../models/category.models";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json(categories);
  console.log("All Category");
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // const category = new Category({ name, description });

    const createdCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({ message: "Success", category: createdCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error... Something went wrong", error });
  }
};
