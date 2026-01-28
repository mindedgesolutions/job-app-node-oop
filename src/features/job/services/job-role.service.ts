import { BadRequestException } from '@/globals/core/error.core';
import { getPaginationAndFilters } from '@/globals/helpers/pagination.helper';
import { prisma } from '@/prisma';
import { JobRole } from 'generated/prisma';
import slugify from 'slugify';

class JobRoleService {
  public async add(requestBody: any) {
    const { name, description } = requestBody;
    const slug = slugify(name, { lower: true });

    const check: JobRole | null = await prisma.jobRole.findUnique({
      where: { slug },
    });

    if (check) throw new BadRequestException('Job role already exists');

    const jobRole = await prisma.jobRole.create({
      data: {
        name,
        slug,
        description,
      },
    });

    return jobRole;
  }

  // ---------------------------------

  public async readAll({
    page,
    limit,
    filter,
  }: {
    page: number;
    limit: number;
    filter: string;
  }) {
    const { data, meta } = await getPaginationAndFilters({
      page,
      limit,
      filter,
      filterFields: ['name', 'description'],
      baseWhere: {},
      model: 'jobRole',
    });

    return { data, meta };
  }

  // ---------------------------------

  public async delete(id: number) {
    await prisma.jobRole.delete({
      where: { id },
    });

    return;
  }
}

export const jobRoleService: JobRoleService = new JobRoleService();
