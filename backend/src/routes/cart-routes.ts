import { Router } from "express";

import {
  createCart,
  getAllUserCart,
  deleteCart,
  getCartData,
  updateCart,
} from "../controllers/cart-controller";

import { authentication } from "../middlewares/auth";

const router = Router();

// router.route("/get-cart").get(getAllUserCart);
router.route("/create-cart").post(createCart); // update
router.route("/get-cart").get(authentication, getCartData);
router.route("/update-cart").put(authentication, updateCart);
router.route("/delete-cart").delete(deleteCart);

export default router;
