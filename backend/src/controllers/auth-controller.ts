import { Request, Response } from "express";
import User from "../models/user.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//MONGOOSE ODM ⇒ Object Data Mapping

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!firstname || !lastname || !email || !password) {
      return res.status(404).json({ message: "Хоосон утга байж болохгүй" });
    }

    // Бүгд утгатай байвал
    // Password hash

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const [user] = await User.where({ email });

  console.log("UserData", user);

  if (!user) {
    return res.status(400).json({ message: "User not Found" });
  } else {
    const isCheck = bcrypt.compareSync(password, password);
    if (!isCheck) {
      res.status(400).json({ message: "Password incorrect" });
    } else {
      const token = jwt.sign({}, "JWT_TOKEN_PASS@123", {
        expiresIn: "24h",
      });
      res.status(200).json({ message: "Login Success", token });
    }
  }
};
