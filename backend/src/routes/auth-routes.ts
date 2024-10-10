import { Router } from "express";
import {
  login,
  signUp,
  forgetPassword,
  verifyOtp,
  verifyPassword,
  getCurrentUser,
} from "../controllers/auth-controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/user").get(authentication, getCurrentUser);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-password").post(verifyPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(login);
router.route("/signup").post(signUp);

export default router;
