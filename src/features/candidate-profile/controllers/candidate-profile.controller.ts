import { NextFunction, Request, Response } from 'express';
import { candidateProfileService } from '@/candidate/services/candidate-profile.service';
import { StatusCodes } from 'http-status-codes';

class CandidateProfileController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await candidateProfileService.create(
        req.body,
        req.currentUser
      );

      return res
        .status(StatusCodes.CREATED)
        .json({ message: 'Profile created', data });
    } catch (error) {
      next(error);
    }
  }

  // ----------------------------------

  public async readAll(req: Request, res: Response) {
    const data = await candidateProfileService.readAll();

    return res.status(StatusCodes.OK).json({ data });
  }

  // ----------------------------------

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;

    const data = await candidateProfileService.readOne(Number(id));

    return res.status(StatusCodes.OK).json({ data });
  }

  // ----------------------------------

  public async update(req: Request, res: Response) {
    const { id } = req.params;

    const data = await candidateProfileService.update(req.body, Number(id));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Profile updated', data });
  }

  // ----------------------------------

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await candidateProfileService.delete(Number(id));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Profile deleted successfully' });
  }

  // ----------------------------------

  public async toggleOpenToWork(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { openToWork } = req.body;
      const data = await candidateProfileService.toggleOpenToWork(
        openToWork,
        Number(id)
      );

      return res
        .status(StatusCodes.OK)
        .json({ message: 'Profile updated', data });
    } catch (error) {
      next(error);
    }
  }
}
export const candidateProfileController: CandidateProfileController =
  new CandidateProfileController();
