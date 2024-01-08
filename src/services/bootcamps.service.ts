import { Repository, getRepository } from "typeorm"
import { IQuery, IService } from "../types/global"
import { BootCamp } from "../entities/BootCamp"
import { Paginator } from "../helpers/pagination";
import { Request } from "express";
import { AppDataSource } from "../../ormconfig";

export class BootCampsService implements IService {
  private bootCampRepo: Repository<BootCamp> = AppDataSource.getRepository(BootCamp);

  async list(req: Request) {
    const page = (req.query.page || 1) as number
    const paginator = new Paginator(this.bootCampRepo);

    return await paginator.paginate(page);
  }
  create() {
    return 'create bootCamp'
  }

  show(id: number) {
    return 'get  single bootCamp'
  }

  update(id: number) {
    return 'update bootCamp'
  }
  delete(id: number): string {
    throw new Error("Method not implemented.")
  }
}