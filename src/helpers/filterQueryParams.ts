export function filterQueryParams<T>(query: Record<string, any>, filterDto: T): Record<string, any> {
  const allowedParams = Object.keys(filterDto);
  const filteredQuery: Record<string, any> = {};

  for (const param of allowedParams) {
    if (query[param] !== undefined) {
      filteredQuery[param] = query[param];
    }
  }

  return filteredQuery;
}