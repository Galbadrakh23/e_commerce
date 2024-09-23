import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-routes";
import { connectDB } from "./config/db";

// express application create
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server");
});

//Server on

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`АPI Server is running on port:${PORT}`);
});
