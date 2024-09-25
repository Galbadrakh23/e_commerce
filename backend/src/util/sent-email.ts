import nodemailer from "nodemailer";
import { generateHTMLTemplate } from "./generateHTMLTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "galbadrakh223@gmail.com",
    pass: "lrrg fivv tdgq sphn",
  },
});

export const sendEmail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: "galbadrakh0223gmail.com", // sender address
    to: "galbadrakh223@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    // html: generateHTMLTemplate(rdmOTP), // html body
  });
};
