import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
const nodemailer = require("nodemailer");
import authRoute from "./routes/auth-routes";
import categoryRoute from "./routes/category-routes";
import productRoute from "./routes/product-route";
import cartRoute from "./routes/cart-routes";
import userRoute from "./routes/user-route";
import wishlistRoute from "./routes/wishlist-route";
import { connectDB } from "./config/db";
dotenv.config();

import { generateHTMLTemplate } from "./util/generateHTMLTemplate";
// express application create
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1/carts", cartRoute);
app.use("api/v1/wishlist", wishlistRoute);

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome E-commerce API server");
});

//Connect mongodb

connectDB(MONGO_URI);
//Server on

app.listen(PORT, () => {
  console.log(`АPI Server is running on port:${PORT}`);
});
