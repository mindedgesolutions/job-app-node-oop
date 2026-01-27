import { Request, Response } from 'express';
import { companyImageService } from '@/company/services/company.image.service';
import { StatusCodes } from 'http-status-codes';

class CompanyImageController {
  public async add(req: Request, res: Response) {
    const { companyId } = req.params;
    const data = await companyImageService.add(
      Number(companyId),
      req.files as Express.Multer.File[],
    );

    res
      .status(StatusCodes.CREATED)
      .json({ message: 'Company images added', data });
  }
}

export const companyImageController: CompanyImageController =
  new CompanyImageController();
