import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

import authRoute from "./routes/auth-routes";
import { connectDB } from "./config/db";
import { generateHTMLTemplate } from "./util/generateHTMLTemplate";

// express application create
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoute);

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["galbadrakh223@gmail.com"],
    subject: "Hello World",
    html: generateHTMLTemplate(rndOtp),
  });
  if (error) {
    console.error("Email_ERR", { error });
  }

  res.send("Welcome E-commerce API server");
});

//Server on

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`АPI Server is running on port:${PORT}`);
});
