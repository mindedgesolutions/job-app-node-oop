import { Request, Response } from 'express';
import { candidateExperienceService } from '@/candidate/services/candidate-experience.service';
import { StatusCodes } from 'http-status-codes';

class CandidateExperienceController {
  public async create(req: Request, res: Response) {
    const data = await candidateExperienceService.create(
      req.body,
      req.currentUser,
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Candidate experience created successfully', data });
  }

  // -------------------------------

  public async readAll(req: Request, res: Response) {
    const data = await candidateExperienceService.readAll();

    return res.status(StatusCodes.OK).json({ data });
  }

  // -------------------------------

  public async readCandidateExperience(req: Request, res: Response) {
    const data = await candidateExperienceService.readCandidateExperience(
      req.currentUser,
    );

    return res.status(StatusCodes.OK).json({ data });
  }

  // -------------------------------

  public async update(req: Request, res: Response) {
    const { expId } = req.params;
    const data = await candidateExperienceService.update(
      req.body,
      Number(expId),
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Candidate experience updated successfully', data });
  }

  // -------------------------------

  public async delete(req: Request, res: Response) {
    const { expId } = req.params;
    await candidateExperienceService.delete(Number(expId));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Candidate experience deleted successfully' });
  }
}

export const candidateExperienceController: CandidateExperienceController =
  new CandidateExperienceController();
