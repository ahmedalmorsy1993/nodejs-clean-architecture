import { BaseEntity, SelectQueryBuilder } from "typeorm";

// Define a generic interface for pagination metadata
interface PaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

// Define a generic function to paginate a query
export async function paginate<T extends BaseEntity>(
  queryBuilder: SelectQueryBuilder<T>,
  page: number = 1,
  perPage: number = 10
): Promise<{ data: T[]; meta: PaginationMeta }> {
  // Calculate the number of records to skip
  const skip = (page - 1) * perPage;

  // Apply pagination options to the query
  const items = await queryBuilder.skip(skip).take(perPage).getMany();

  // Get the total count of items (without pagination)
  const total = await queryBuilder.getCount();

  // Calculate the total number of pages
  const last_page = Math.ceil(total / perPage);

  // Create pagination metadata
  const meta: PaginationMeta = {
    total,
    per_page: perPage,
    current_page: +page,
    last_page
  };

  // Return data and metadata
  return { data: items, meta };
}
