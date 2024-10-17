import { Request, Response } from "express";
import WishList from "../models/wishlist.model";

export const getWishListData = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.user;
    const wishListData = await WishList.findOne({
      user: userId,
    }).populate("products.product");
    res.status(200).json({ message: " Get wishlist data", wishListData });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};
