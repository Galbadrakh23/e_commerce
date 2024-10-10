import { Request, Response } from "express";
import Cart from "../models/cart.models";

export const getAllUserCart = async (req: Request, res: Response) => {
  try {
    const AllCarts = await Cart.find({});
    res.status(200).json({
      message: "Success to get all cart",
      AllCarts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to get cart",
    });
  }
};

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });

    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({
        message: "Created new cart",
        cart,
      });
    }

    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
    } else {
      findUserCart.products.push({ product: productId, quantity });
    }

    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "Updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to read carts",
    });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const deletedCart = await Cart.findOneAndDelete({ user: userId });
    res.status(200).json({
      message: "Deleted Cart",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to delete Cart",
    });
  }
};
