import { Repository } from "typeorm"
import { BootCamp } from "../entities/BootCamp"
import { Paginator } from "../helpers/pagination";
import { Request, } from "express";
import { AppDataSource } from "../../ormconfig";
import { BootCampDto, UpdateBootcampDto } from "../dto/bootcamp.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class BootCampsService {
  private bootCampRepo: Repository<BootCamp> = AppDataSource.getRepository(BootCamp)

  async list(req: Request) {
    const page = (req.query.page || 1) as number
    const paginator = new Paginator(this.bootCampRepo);
    return await paginator.paginate(page);
  }

  async create(req: Request) {
    const dto = plainToClass(BootCampDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw { errors };
    }

    return await this.bootCampRepo.save({ ...dto });
  }
  async delete(id: string) {
    const bootcamp = await this.bootCampRepo.findOne({ where: { id: Number(id) } })
    if (!bootcamp) {
      throw new Error("Bootcamp not found"); // Throw an error object with a message

    }
    return await bootcamp.remove()

  }
  async update(id: string, updateData: UpdateBootcampDto) {
    const bootcamp = await this.bootCampRepo.findOne({ where: { id: Number(id) } });

    if (!bootcamp) {
      throw new Error("Bootcamp not found");
    }

    Object.assign(bootcamp, updateData); // Merge update data into the found entity

    const errors = await validate(bootcamp); // Validate the updated entity
    if (errors.length > 0) {
      throw { errors };
    }

    return await this.bootCampRepo.save(bootcamp); // Save the updated entity
  }



}
