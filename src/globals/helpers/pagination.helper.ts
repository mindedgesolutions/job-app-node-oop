import { prisma } from '@/prisma';
import { Prisma } from 'generated/prisma';

export function pagination(total: number, page: number, limit: number) {
  const totalPage = Math.ceil(total / limit);
  const meta = { currentPage: page, totalCount: total, totalPage };

  return meta;
}

// --------------------------------

export async function getPaginationAndFilters({
  page = 1,
  limit = 10,
  filter,
  filterFields = [],
  baseWhere = {},
  model,
}: any) {
  const normalizedFilter = filter?.trim();

  const where = normalizedFilter
    ? {
        ...baseWhere,
        OR: filterFields.map((field: string) => ({
          [field]: {
            contains: normalizedFilter,
            mode: Prisma.QueryMode.insensitive,
          },
        })),
      }
    : baseWhere;

  const safeLimit = Math.min(Math.max(limit, 1), 100);

  const total = await (prisma[model] as any).count({ where });

  const totalPage = Math.max(Math.ceil(total / safeLimit), 1);
  const safePage = Math.min(Math.max(page, 1), totalPage);
  const safeSkip = (safePage - 1) * safeLimit;

  const data = await (prisma as any)[model].findMany({
    where,
    skip: safeSkip,
    take: safeLimit,
  });

  const meta = { currentPage: safePage, totalCount: total, totalPage };

  return { data, meta };
}
