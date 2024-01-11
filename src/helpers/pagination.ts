// Paginator.ts
import { Repository } from 'typeorm';

interface PaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export class Paginator<T> {
  constructor(private repository: Repository<T>, private filterDto?: T) { }

  async paginate(
    page: number = 1,
    perPage: number = 10
  ): Promise<{ data: T[]; meta: PaginationMeta }> {
    const skip = (page - 1) * perPage;

    const queryBuilder = this.repository.createQueryBuilder();
    let qs = queryBuilder.skip(skip).take(perPage);

    if (this.filterDto) {
      qs = this.applyFilters(qs, this.filterDto);
    }

    const [items, total] = await Promise.all([
      qs.getMany(),
      queryBuilder.getCount(),
    ]);

    const last_page = Math.ceil(total / perPage);

    const meta: PaginationMeta = {
      total,
      per_page: perPage,
      current_page: +page,
      last_page,
    };

    return { data: items, meta };
  }

  private applyFilters(queryBuilder: any, filterDto: any): any {
    // Add logic to dynamically apply filters based on filterDto
    for (const key in filterDto) {
      if (filterDto.hasOwnProperty(key) && filterDto[key] !== undefined) {
        queryBuilder = queryBuilder.andWhere(`${key} = :${key}`, {
          [key]: filterDto[key],
        });
      }
    }
    return queryBuilder;
  }
}
