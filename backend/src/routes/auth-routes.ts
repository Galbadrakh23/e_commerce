import { Router } from "express";
import {
  login,
  signUp,
  forgetPassword,
  verifyOtp,
  verifyPassword,
} from "../controllers/auth-controller";
// import { authentication } from "../middlewares/auth";
// import { currentUser } from "../controllers/auth-controller";

const router = Router();

// router.route("/current-user").get(authentication, currentUser);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-password").post(verifyPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(login);
router.route("/signup").post(signUp);

export default router;
