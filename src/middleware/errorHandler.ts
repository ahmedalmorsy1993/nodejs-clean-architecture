import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../helpers/errorResponse";

export const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.code == 23505) {
    // that mean duplicate ket constraint unique
    return res.status(409).json({ message: err.detail });
  }

  if (err && err.errors && Array.isArray(err.errors)) {
    const validationErrors = err.errors.reduce(
      (obj: { [key: string]: any }, error: any) => {
        obj[error.property] = Object.values(error.constraints);
        return obj;
      },
      {}
    );

    return res.status(err.statusCode || 500).json({ errors: validationErrors });
  }

  if (err.message.includes('not found')) {
    return res.status(404).json({ message: err.message });
  }

  next(err);
};
