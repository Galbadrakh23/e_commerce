import { Router } from "express";

import { getAllProducts, getProduct } from "../controllers/product-controller";

const router = Router();
//api/v1/products
router.route("/").get(getAllProducts);
router.route("/:productId").get(getProduct);

export default router;
