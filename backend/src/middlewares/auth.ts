import jwt from "jsonwebtoken";

export const auth = (req: any, res: any, next: any) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрнэ үү" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
  req.user = user;

  next();
};
