import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
const nodemailer = require("nodemailer");

dotenv.config();

import authRoute from "./routes/auth-routes";
import categoryRoute from "./routes/category-routes";
import { connectDB } from "./config/db";

import { generateHTMLTemplate } from "./util/generateHTMLTemplate";
// express application create
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/", categoryRoute);

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

app.get("/", async (req: Request, res: Response) => {
  const rdmOTP = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");
  // sendEmail("galbadrakh0223@gmail.com", rdmOTP);

  res.send("Welcome E-commerce API server");
});

//Server on

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`АPI Server is running on port:${PORT}`);
});
