import nodemailer from "nodemailer";
import { generateHTMLTemplate } from "./generateHTMLTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_FROM_USER,
    pass: process.env.EMAIL_FROM_PASS,
  },
});

export const sendEmail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM_USER, // sender address
    to: "galbadrakh223@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    // html: generateHTMLTemplate(rdmOTP), // html body
  });
};
