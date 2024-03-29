import { Repository } from "typeorm"
import { BootCamp } from "../entities/BootCamp"
import { Paginator } from "../helpers/pagination";
import { Request, } from "express";
import { AppDataSource } from "../../ormconfig";
import { BootCampDto, BootCampFilterDto, } from "../dto/bootcamp.dto";
import { ErrorResponse } from "../helpers/errorResponse";
import { requestValidator } from "../utils/requestValidator";
import { plainToClass } from "class-transformer";
import { filterQueryParams } from "../helpers/filterQueryParams";

export class BootCampsService {
  private bootCampRepo: Repository<BootCamp> = AppDataSource.getRepository(BootCamp)
  async list(req: Request) {
    const page = (req.query.page || 1) as number;

    const filterDto = new BootCampFilterDto();
    const filteredQuery = filterQueryParams(req.query, filterDto);
    const paginator = new Paginator(this.bootCampRepo, (qb) => {
      if (filteredQuery.name !== undefined) {
        qb.andWhere('name = :name', { name: filteredQuery.name });
      }

      if (filteredQuery.description !== undefined) {
        qb.orWhere('description LIKE :description', { description: `%${filteredQuery.description}%` });
      }
    });
    return await paginator.paginate(page);
  }


  async create(req: Request) {
    const dto = await requestValidator<BootCampDto>(BootCampDto, req.body)
    const bootCamp = this.bootCampRepo.create(dto); // Create the entity with the DTO\
    return await this.bootCampRepo.save(bootCamp); // Save the entity, and BeforeInsert will handle updating the slug
  }

  async delete(id: string) {
    const bootcamp = await this.bootCampRepo.findOne({ where: { id: Number(id) } })
    this.notFoundBootcamp(bootcamp);
    return await bootcamp.remove()

  }

  async update(id: string, updateData: BootCampDto) {
    const bootcamp = await this.bootCampRepo.findOne({ where: { id: Number(id) } });
    this.notFoundBootcamp(bootcamp);
    const dto = await requestValidator<BootCampDto>(BootCampDto, { ...bootcamp, ...updateData })
    return await this.bootCampRepo.save(dto); // Save the updated entity
  }

  async show(id: string) {
    const bootcamp = await this.bootCampRepo.findOne({ where: { id: Number(id) } });
    this.notFoundBootcamp(bootcamp);
    return bootcamp
  }

  private notFoundBootcamp(BootCampDto: BootCampDto) {
    if (!BootCampDto) {
      throw new ErrorResponse({ statusCode: 404, message: 'Bootcamp not found' });
    }

  }

}
