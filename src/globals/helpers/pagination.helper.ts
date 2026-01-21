export function pagination(total: number, page: number, limit: number) {
  const totalPage = Math.ceil(total / limit);
  const meta = { currentPage: page, totalCount: total, totalPage };

  return meta;
}
