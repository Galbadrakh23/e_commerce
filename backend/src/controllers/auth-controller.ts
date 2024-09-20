import { Request, Response } from "express";
import User from "../models/user.models";

//MONGOOSE ODM ⇒ Object Data Mapping

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(404).json({ message: "Хоосон утга байж болохгүй" });
    }

    // Бүгд утгатай байвал
    // Password hash

    const createdUser = await User.create({
      name,
      email,
      password,
      phonenumber: "",
    });
    res.status(201).json({ message: "Success", user: createdUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error... Something went wrong", error });
  }
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login Success" });
};
