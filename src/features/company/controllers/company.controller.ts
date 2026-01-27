import { Request, Response } from 'express';
import { companyService } from '@/company/services/company.service';
import { StatusCodes } from 'http-status-codes';
import { skip } from 'generated/prisma/runtime/client';

class CompanyController {
  public async create(req: Request, res: Response) {
    const data = await companyService.create(req.body, req.currentUser!);

    res.status(StatusCodes.CREATED).json({ data });
  }

  // --------------------------------

  public async readAll(req: Request, res: Response) {
    let { page = 1, limit = 8, f = '' } = req.query;

    page = Math.max(Number(page) || 1, 1);
    limit = Number(limit);

    const { data, meta } = await companyService.readAllPagination({
      page,
      limit,
      filter: f as string,
    });

    res.status(StatusCodes.OK).json({ data, meta });
  }

  // --------------------------------

  public async readUnapproved(req: Request, res: Response) {
    const data = await companyService.readUnapproved();

    res.status(StatusCodes.OK).json({ data });
  }

  // --------------------------------

  public async toggleStatus(req: Request, res: Response) {
    const { companyId } = req.params;
    const data = await companyService.toggleStatus(req.body, Number(companyId));

    res.status(StatusCodes.OK).json({ data });
  }

  // --------------------------------

  public async update(req: Request, res: Response) {
    const { companyId } = req.params;
    const data = await companyService.update(
      req.body,
      Number(companyId),
      req.currentUser!,
    );

    res.status(StatusCodes.OK).json({ data });
  }

  // --------------------------------

  public async delete(req: Request, res: Response) {
    const { companyId } = req.params;
    await companyService.delete(Number(companyId), req.currentUser!);

    res
      .status(StatusCodes.OK)
      .json({ message: 'Company deleted successfully' });
  }
}

export const companyController: CompanyController = new CompanyController();
