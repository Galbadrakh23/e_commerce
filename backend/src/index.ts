import express, { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-routes";

// express application create
const app = express();

//middlewares
app.use("/api/v1/auth", authRoute);

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server");
});

//Server on

app.listen(PORT, () => {
  console.log(`АPI Server is running on port:${PORT}`);
});
