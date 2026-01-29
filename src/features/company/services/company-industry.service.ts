import { NotFoundException } from '@/globals/core/error.core';
import { companyService } from '@/company/services/company.service';
import { prisma } from '@/prisma';

class CompanyIndustryService {
  private async findIndustryById(industryId: number) {
    const industry = await prisma.industry.findUnique({
      where: { id: industryId },
    });

    return !!industry;
  }

  // --------------------------------

  public async add(
    industryId: number,
    companyId: number,
    currentUser: UserPayload,
  ) {
    const company = await companyService.companyExistsByCompanyIdUserId(
      Number(currentUser.id),
      companyId,
    );

    if (!company) throw new NotFoundException(`Company not found`);

    const industry = await this.findIndustryById(industryId);

    if (!industry) throw new NotFoundException(`Industry not found`);

    const check = await prisma.companyIndustry.findFirst({
      where: { companyId, industryId },
    });

    if (!check) {
      await prisma.companyIndustry.create({
        data: {
          companyId,
          industryId,
        },
      });
    }

    return;
  }

  // --------------------------------

  public async read(companyId: number) {
    const data = await prisma.company.findUnique({
      where: { id: companyId },
      include: {
        images: {
          select: {
            imageUrl: true,
          },
        },
        industries: {
          include: {
            industry: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });

    return data;
  }

  // --------------------------------

  public async readAll() {
    const data = await prisma.company.findMany({
      include: {
        _count: true,
        images: {
          select: { imageUrl: true },
        },
        industries: {
          include: {
            industry: { select: { name: true, slug: true } },
          },
        },
      },
    });

    return data;
  }

  // --------------------------------

  public async delete(industryId: number, companyId: number) {
    await prisma.companyIndustry.delete({
      where: { companyId_industryId: { companyId, industryId } },
    });

    return;
  }
}

export const companyIndustryService: CompanyIndustryService =
  new CompanyIndustryService();
