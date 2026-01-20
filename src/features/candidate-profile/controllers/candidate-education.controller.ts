import { Request, Response } from 'express';
import { candidateEducationService } from '@/candidate/services/candidate-education.service';
import { StatusCodes } from 'http-status-codes';
import { CandidateEducation } from 'generated/prisma';

class CandidateEducationController {
  public async create(req: Request, res: Response) {
    const data = await candidateEducationService.create(
      req.body,
      req.currentUser,
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Candidate education created successfully', data });
  }

  // -----------------------------------

  public async readAll(req: Request, res: Response) {
    const data: CandidateEducation[] =
      await candidateEducationService.readAll();

    return res.status(StatusCodes.OK).json({ data });
  }

  // -----------------------------------

  public async readMyEducation(req: Request, res: Response) {
    const data = await candidateEducationService.readMyEducation(
      req.currentUser,
    );

    return res.status(StatusCodes.OK).json({ data });
  }

  // -----------------------------------

  public async update(req: Request, res: Response) {
    const data = await candidateEducationService.update(
      req.body,
      req.currentUser,
    );

    return res.status(StatusCodes.OK).json({ data });
  }

  // -----------------------------------

  public async delete(req: Request, res: Response) {
    await candidateEducationService.delete(
      Number(req.params.educationId),
      req.currentUser,
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Candidate education deleted successfully' });
  }
}

export const candidateEducationController: CandidateEducationController =
  new CandidateEducationController();
