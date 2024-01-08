import { Request, Response } from "express";


export interface IQuery {
  page: number
}
export interface IService {
  list(req: Request): unknown;
  create(): string;
  show(id: number): string;
  update(id: number): string;
  delete(id: number): string;
}
export interface IController {
  list(req: Request, res: Response): void;
  show(req: Request, res: Response): void;
  create(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
}