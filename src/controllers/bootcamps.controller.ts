import { Request, Response } from "express";
import { BootCampsService } from "../services/bootcamps.service";
import { injectable } from "tsyringe";
import { asyncHandler } from "../middleware/asyncHandler";

@injectable()
export class BootCampController {
  constructor(private bootcampService: BootCampsService) { }

  list = async (req: Request, res: Response) => {
    const result = await this.bootcampService.list(req);
    res.send(result);
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.bootcampService.create(req);
    res.status(201).json(result);
  }
  )

  delete = asyncHandler(async (req: Request, res: Response) => {
    await this.bootcampService.delete(req.params.id)
    res.send({ message: 'bootcamp deleted successfully' })

  }
  )
  update = asyncHandler(async (req: Request, res: Response) => {
    await this.bootcampService.update(req.params.id, req.body)
    res.send({ message: 'bootcamp updated successfully' })
  }
  )
  show = asyncHandler(async (req: Request, res: Response) => {
    const bootcamp = await this.bootcampService.show(req.params.id)
    res.status(200).send({ data: bootcamp })
  }
  )

}
