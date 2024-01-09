import { NextFunction, Request, Response } from "express";


export interface IQuery {
  page: number
}
export interface IService {
  list(req: Request): unknown;
  create(req: Request, res: Response, next?: NextFunction): void;
  show(id: number): unknown;
  update(id: number): unknown;
  delete(id: number): unknown;
}
export interface IController {
  list(req: Request, res: Response, next?: NextFunction): void;
  show(req: Request, res: Response, next?: NextFunction): void;
  create(req: Request, res: Response, next?: NextFunction): void;
  update(req: Request, res: Response, next?: NextFunction): void;
  delete(req: Request, res: Response, next?: NextFunction): void;
}