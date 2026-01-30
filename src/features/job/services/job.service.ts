import { companyService } from '@/features/company/services/company.service';
import { NotFoundException } from '@/globals/core/error.core';
import { prisma } from '@/prisma';
import slugify from 'slugify';
import { CreateJobDTO } from '@/job/interfaces/job.interface';
import { getPaginationAndFilters } from '@/globals/helpers/pagination.helper';
import { Job } from 'generated/prisma';
import { PaginationDTO } from '@/features/company/interfaces/company.interface';

class JobService {
  public async jobExistsByUserIdJobId(userId: number, jobId: number) {
    const check = await prisma.job.findFirst({
      where: { id: jobId, userId: userId },
    });

    return !!check;
  }

  // ---------------------------------

  public async create(requestBody: CreateJobDTO, currentUser: UserPayload) {
    const { jobRoleId, title, description, minSalary, maxSalary } = requestBody;

    const company = await companyService.getCompanyByUserId(
      Number(currentUser.id),
    );

    if (!company) throw new NotFoundException('Company not found');

    const newJob = await prisma.job.create({
      data: {
        userId: Number(currentUser.id),
        companyId: Number(company.id),
        jobRoleId,
        title: title.trim(),
        description: description?.trim(),
        slug: slugify(title, { lower: true }),
        minSalary,
        maxSalary,
      },
    });

    return newJob;
  }

  // ---------------------------------

  public async readAll({
    page,
    limit,
    quickFilter,
    status,
    jobRoleId,
    sortBy,
  }: {
    page: number;
    limit: number;
    quickFilter: string;
    status: string;
    jobRoleId: number;
    sortBy: any;
  }): Promise<{ data: Job[]; meta: PaginationDTO }> {
    const { data, meta } = await getPaginationAndFilters({
      page,
      limit,
      quickFilter,
      quickFilterFields: ['title'],
      filters: { status, jobRoleId },
      baseWhere: {},
      model: 'job',
      sortBy,
    });

    return { data, meta };
  }

  // --------------------------------

  public async readOne(jobId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });

    if (!job) throw new NotFoundException('Job not found');

    return job;
  }

  // ---------------------------------

  public async readMyJobs({
    page,
    limit,
    filter,
    currentUser,
  }: {
    page: number;
    limit: number;
    filter: string;
    currentUser: UserPayload;
  }) {
    const { data, meta } = await getPaginationAndFilters({
      page,
      limit,
      filter,
      filterFields: ['title'],
      baseWhere: { userId: Number(currentUser.id) },
      model: 'job',
    });

    return { data, meta };
  }

  // ---------------------------------

  public async update(
    requestBody: CreateJobDTO,
    jobId: number,
    currentUser: UserPayload,
  ) {
    const { jobRoleId, title, description, minSalary, maxSalary } = requestBody;

    const company = await companyService.getCompanyByUserId(
      Number(currentUser.id),
    );

    if (!company) throw new NotFoundException('Company not found');

    const updated = await prisma.job.update({
      where: { id: jobId },
      data: {
        jobRoleId,
        title: title.trim(),
        description: description?.trim(),
        slug: slugify(title, { lower: true }),
        minSalary,
        maxSalary,
      },
    });

    return updated;
  }

  // ---------------------------------

  public async delete(jobId: number) {
    await prisma.job.delete({ where: { id: jobId } });

    return;
  }
}

export const jobService: JobService = new JobService();
