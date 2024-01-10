import { ValidationError } from "class-validator";

interface IError {
  statusCode: number;
  message?: string;
  errors?: ValidationError[]
}

export class ErrorResponse extends Error {
  statusCode: number;
  code: number;
  detail: string
  errors: ValidationError[];
  constructor({ message, statusCode, errors }: IError) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors
  }

}