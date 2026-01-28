import { Request, Response } from 'express';
import { companyImageService } from '@/company/services/company.image.service';
import { StatusCodes } from 'http-status-codes';
import { CompanyImage } from 'generated/prisma';

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

  // ----------------------------------

  public async readAll(
    req: Request,
    res: Response,
  ): Promise<CompanyImage[] | void> {
    const { companyId } = req.params;
    const data = await companyImageService.readAll(Number(companyId));

    res
      .status(StatusCodes.OK)
      .json({ message: 'Company images retrieved', data });
  }

  // ----------------------------------

  public async delete(req: Request, res: Response) {
    const { imageId } = req.params;

    await companyImageService.delete(Number(imageId));

    res.status(StatusCodes.OK).json({ message: 'Company image deleted' });
  }
}

export const companyImageController: CompanyImageController =
  new CompanyImageController();
