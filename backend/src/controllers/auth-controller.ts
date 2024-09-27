import { Request, Response } from "express";
import User from "../models/user.models";
import bcrypt from "bcrypt";
import { generateToken } from "../util/jwt";
import { sendEmail } from "../util/sent-email";
import crypto from "crypto";

//MONGOOSE ODM ⇒ Object Data Mapping

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(404).json({ message: "Хоосон утга байж болохгүй" });
    }

    // Бүгд утгатай байвал
    // Password hash

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({ message: "Success", user: createdUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error... Something went wrong", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        return res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = generateToken({ id: user._id });
        res.status(200).json({
          message: "success",
          token,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Client error" });
    console.log("Алдаа", error);
  }
};

// export const currentUser = async (req: Request, res: Response) => {
//   const { id } = req.user;
//     const findUser = await User.findById(id);
//     res.status(200).json({ user: findUser, message: "success" });
// };

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res
        .status(404)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }

    const otp = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(4, "0");
    findUser.otp = otp;
    await findUser.save();
    await sendEmail(email, otp);
    res.status(200).json({ message: "OTP code is sent to your email" });
  } catch (error) {}
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;

  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();
  await sendEmail(
    email,
    `<a href="http://localhost:3000/forgetpass/newpass?resettoken="${resetToken}"">Reset password</a>`
  );
  res.status(200).json({ message: "OTP code is sent to your email" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now },
  });

  if (!findUser) {
    return res.status(400).json({ message: "Invalid reset token" });
  }

  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Password changed successfully" });
};
