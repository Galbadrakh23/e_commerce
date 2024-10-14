import { Router } from "express";

import { getAllProducts, getProduct } from "../controllers/product-controller";

const router = Router();
//api/v1/products
router.route("/products").get(getAllProducts);
router.route("/product:id").get(getProduct);

export default router;
