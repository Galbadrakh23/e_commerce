import { Router } from "express";

import {
  createCart,
  getAllUserCart,
  deleteCart,
} from "../controllers/cart-controller";

const router = Router();

router.route("/get-cart").get(getAllUserCart);
router.route("/create-cart").post(createCart); // update
router.route("/delete-cart").delete(deleteCart);

export default router;
