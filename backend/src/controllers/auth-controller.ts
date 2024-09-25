import { Request, Response } from "express";
import User from "../models/user.models";
import bcrypt from "bcrypt";
import { generateToken } from "../util/jwt";

//MONGOOSE ODM ⇒ Object Data Mapping

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(404).json({ message: "Хоосон утга байж болохгүй" });
    }

    // Бүгд утгатай байвал
    // Password hash

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({ message: "Success", user: createdUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error... Something went wrong", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Хэрэглэгч бүртгэлгүй байна." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Нууц үг эсвэл имэйл буруу." });
    } else {
      const token = generateToken({ id: user._id });
      res.status(200).json({
        message: "Амжилттай нэвтэрлээ",
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
