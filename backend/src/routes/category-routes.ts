import { Router } from "express";

import {
  getCategories,
  createCategory,
} from "../controllers/category-controller";

const router = Router();

router.route("/category").get(getCategories);
router.route("/category").post(createCategory);

export default router;
