import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  
  const authHeaders = request.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    return new Error("Token doesn't exist");
  }

 

  const token = authHeaders.split(" ")[1];
  try {
    const res = jwt.verify(
      token!,
      "preptrack"
    ) as JwtPayload;
  
    console.log(res);
    next();
  } catch (err) {
    console.error("Failed to verify the token.", err);
  }
};