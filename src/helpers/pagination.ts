import { Repository } from 'typeorm';

interface PaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export class Paginator<T> {
  constructor(private repository: Repository<T>) { }

  async paginate(
    page: number = 1,
    perPage: number = 10
  ): Promise<{ data: T[]; meta: PaginationMeta }> {
    const skip = (page - 1) * perPage;

    const queryBuilder = this.repository.createQueryBuilder();

    const [items, total] = await Promise.all([
      queryBuilder.skip(skip).take(perPage).getMany(),
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
}
