import { Request, Response } from "express";
import User from "../models/user.models";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({
      message: "Success to get Users",
      allUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to get Users",
    });
  }
};
