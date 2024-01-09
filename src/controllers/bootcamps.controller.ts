import { NextFunction, Request, Response } from "express";
import { BootCampsService } from "../services/bootcamps.service";
import { IController } from "../types/global";
import { injectable } from "tsyringe";
import { BootCamp } from "../entities/BootCamp";

@injectable()
export class BootCampController {
  constructor(private bootcampService: BootCampsService) { }

  list = async (req: Request, res: Response) => {
    const result = await this.bootcampService.list(req);
    res.send(result);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.bootcampService.create(req);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

}
