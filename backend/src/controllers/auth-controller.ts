import { Request, Response } from "express";
import User from "../models/user.models";

//MONGOOSE ODM ⇒ Object Data Mapping

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password, address } = req.body;

    if (!firstname || !lastname || !email || !password || !address) {
      res.status(404).json({ message: "Хоосон утга байж болохгүй" });
    }

    // Бүгд утгатай байвал
    // Password hash

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phonenumber: "",
      role: "user",
      profile_img: "",
      address: "",
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
