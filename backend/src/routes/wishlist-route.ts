import { Router } from "express";
import {
  //   addToWishList,
  //   deleteFromWishList,
  getWishListData,
} from "../controllers/wishlist-controller";

import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/get").get(authentication, getWishListData);
// router.route("/add").post(authentication, addToWishList);
// router.route("/delete").delete(authentication, deleteFromWishList);

export default router;
