import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ErrorResponse } from "../helpers/errorResponse";

export const requestValidator = async <T extends object>(dto: ClassConstructor<T>, data: T) => {
  const instance = plainToClass(dto, data);
  const errors = await validate(instance);

  if (errors.length > 0) {
    throw new ErrorResponse({ statusCode: 400, errors });
  } else {
    return instance;
  }
};
