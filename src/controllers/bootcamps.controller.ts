import { Request, Response } from "express";
import { BootCampsService } from "../services/bootcamps.service";

export class BootCampController {
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