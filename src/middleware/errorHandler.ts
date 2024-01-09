import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.errors && Array.isArray(err.errors)) {
    const validationErrors = err.errors.reduce(
      (obj: { [key: string]: any }, error: any) => {
        obj[error.property] = Object.values(error.constraints);
        return obj;
      },
      {}
    );

    return res.status(400).json({ errors: validationErrors });
  }

  next(err);
};
