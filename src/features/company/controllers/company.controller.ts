import { Request, Response } from 'express';
import { companyService } from '@/company/services/company.service';
import { StatusCodes } from 'http-status-codes';

class CompanyController {
  public async create(req: Request, res: Response) {
    const data = await companyService.create(req.body, req.currentUser!);

    res.status(StatusCodes.CREATED).json({ data });
  }

  // --------------------------------

  public async readAll(req: Request, res: Response) {
    const data = await companyService.readAll();

    res.status(StatusCodes.OK).json({ data });
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
