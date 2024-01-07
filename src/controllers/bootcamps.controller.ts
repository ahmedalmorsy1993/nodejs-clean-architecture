import { Request, Response } from "express";
import { BootCampsService } from "../services/bootcamps.service";
import { IController } from "../types/global";

export class BootCampController implements IController {
  constructor(private bootcampService: BootCampsService) { }
  list = (req: Request, res: Response) => {
    res.send(this.bootcampService.list())
  }
  show = (req: Request, res: Response) => {

  }
  create = (req: Request, res: Response) => {

  }
  update = (req: Request, res: Response) => {

  }
  delete = (req: Request, res: Response) => {

  }
}