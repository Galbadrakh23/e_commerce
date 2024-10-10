import { Router } from "express";

import {
  createCart,
  getUserCart,
  deleteCart,
} from "../controllers/cart-controller";

const router = Router();

router.route("/get-cart").get(getUserCart);
router.route("/create-cart").post(createCart);
router.route("/delete-cart").delete(deleteCart);

export default router;
