import { Request, Response } from 'express';
import { companyIndustryService } from '@/company/services/company-industry.service';
import { StatusCodes } from 'http-status-codes';

class CompanyIndustryController {
  public async add(req: Request, res: Response) {
    const { industryId } = req.body;
    const { companyId } = req.params;

    await companyIndustryService.add(
      Number(industryId),
      Number(companyId),
      req.currentUser!,
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Industry added to company successfully' });
  }

  // --------------------------------

  public async read(req: Request, res: Response) {
    const { companyId } = req.params;

    const data = await companyIndustryService.read(Number(companyId));

    return res.status(StatusCodes.OK).json({ data });
  }

  // --------------------------------

  public async readAll(req: Request, res: Response) {
    const data = await companyIndustryService.readAll();

    return res.status(StatusCodes.OK).json({ data });
  }

  // --------------------------------

  public async delete(req: Request, res: Response) {
    const { companyId } = req.params;
    const { industryId } = req.body;

    await companyIndustryService.delete(Number(industryId), Number(companyId));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Industry removed from company successfully' });
  }
}

export const companyIndustryController: CompanyIndustryController =
  new CompanyIndustryController();
