import { Request, Response } from "express";
import { BootCampsService } from "../services/bootcamps.service";
import { IController } from "../types/global";
import { injectable } from "tsyringe";

@injectable()
export class BootCampController implements IController {
  constructor(private bootcampService: BootCampsService) { }
  list = async (req: Request, res: Response) => {
    res.send(await this.bootcampService.list(req))
  }

  create = (req: Request, res: Response) => {

  }
  show = (req: Request, res: Response) => {

  }

  update = (req: Request, res: Response) => {

  }
  delete = (req: Request, res: Response) => {

  }
}