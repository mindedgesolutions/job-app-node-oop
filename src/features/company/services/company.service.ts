import { prisma } from '@/prisma';
import { Company, Prisma } from 'generated/prisma';
import {
  CompanyDTO,
  PaginationDTO,
} from '@/company/interfaces/company.interface';
import { UnauthorizedException } from '@/globals/core/error.core';
import { getPaginationAndFilters } from '@/globals/helpers/pagination.helper';

class CompanyService {
  public async getCompanyByUserId(
    userId: number,
    companyId: number,
  ): Promise<boolean> {
    const check = await prisma.company.findFirst({
      where: { userId: Number(userId), id: companyId },
    });

    return !!check;
  }

  // --------------------------------

  public async create(
    requestBody: CompanyDTO,
    currentUser: UserPayload,
  ): Promise<Company> {
    const {
      name,
      description,
      address,
      teamSize,
      estDate,
      websiteUrl,
      mapLink,
    } = requestBody;

    const data = await prisma.company.create({
      data: {
        userId: Number(currentUser.id),
        name,
        description,
        address,
        teamSize,
        estDate: new Date(estDate),
        websiteUrl,
        mapLink,
      },
    });

    return data;
  }

  // --------------------------------

  public async readAll(): Promise<Company[]> {
    const data = await prisma.company.findMany({
      where: { isApproved: true },
    });

    return data;
  }

  // --------------------------------

  public async readAllPagination({
    page,
    limit,
    filter,
  }: {
    page: number;
    limit: number;
    filter: string;
  }): Promise<{ data: Company[]; meta: PaginationDTO }> {
    const { data, meta } = await getPaginationAndFilters({
      page,
      limit,
      filter,
      filterFields: ['name', 'description'],
      baseWhere: { isApproved: true },
      model: 'company',
    });

    return { data, meta };
  }

  // --------------------------------

  public async readUnapproved(): Promise<Company[]> {
    const data = await prisma.company.findMany({
      where: { isApproved: false },
    });

    return data;
  }

  // --------------------------------

  public async toggleStatus(
    requestBody: { status: boolean },
    companyId: number,
  ): Promise<Company> {
    const { status } = requestBody;

    const data = await prisma.company.update({
      where: { id: companyId },
      data: { isApproved: status },
    });

    return data;
  }

  // --------------------------------

  public async update(
    requestBody: CompanyDTO,
    companyId: number,
    currentUser: UserPayload,
  ): Promise<Company> {
    const {
      name,
      description,
      address,
      teamSize,
      estDate,
      websiteUrl,
      mapLink,
    } = requestBody;

    const check = await this.getCompanyByUserId(
      Number(currentUser.id),
      companyId,
    );

    if (!check)
      throw new UnauthorizedException(
        `You're not allowed to update this company`,
      );

    const data = await prisma.company.update({
      where: { userId: Number(currentUser.id), id: companyId },
      data: {
        name,
        description,
        address,
        teamSize,
        estDate: new Date(estDate),
        websiteUrl,
        mapLink,
      },
    });

    return data;
  }

  // --------------------------------

  public async delete(
    companyId: number,
    currentUser: UserPayload,
  ): Promise<void> {
    const check = await this.getCompanyByUserId(
      Number(currentUser.id),
      companyId,
    );

    if (!check)
      throw new UnauthorizedException(
        `You're not allowed to delete this company`,
      );

    await prisma.company.delete({
      where: { id: companyId },
    });

    return;
  }
}

export const companyService: CompanyService = new CompanyService();
