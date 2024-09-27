import { Request, Response, NextFunction } from "express";

interface IMyRequest extends Request {
  user: string | object;
}

declare global {
  namespace Express {
    interface Request {
      user: string | object;
    }
  }
}

import { decodeToken } from "../util/jwt";
export const authentication = (
  req: IMyRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Та энэ үйлдлийг хийхийн тулд нэвтэрнэ үү" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;

  next();
};
