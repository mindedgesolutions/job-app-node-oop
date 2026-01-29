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
  quickFilter,
  quickFilterFields = [],
  filters = {},
  baseWhere = {},
  model,
  sortBy = {},
}: any) {
  const normalizedFilter = quickFilter?.trim();

  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(
      ([_, value]) => value !== '' && value !== undefined && value !== null,
    ),
  );

  const where = normalizedFilter
    ? {
        ...baseWhere,
        ...cleanedFilters,
        OR: quickFilterFields.map((field: string) => ({
          [field]: {
            contains: normalizedFilter,
            mode: Prisma.QueryMode.insensitive,
          },
        })),
      }
    : { ...baseWhere, ...cleanedFilters };

  const safeLimit = Math.min(Math.max(limit, 1), 100);

  const total = await (prisma[model] as any).count({ where });

  const totalPage = Math.max(Math.ceil(total / safeLimit), 1);
  const safePage = Math.min(Math.max(page, 1), totalPage);
  const safeSkip = (safePage - 1) * safeLimit;

  const data = await (prisma as any)[model].findMany({
    where,
    orderBy: sortBy,
    skip: safeSkip,
    take: safeLimit,
  });

  const meta = { currentPage: safePage, totalCount: total, totalPage };

  return { data, meta };
}
