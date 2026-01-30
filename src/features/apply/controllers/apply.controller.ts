import { Request, Response } from 'express';
import { applyService } from '@/apply/services/apply.service';
import { StatusCodes } from 'http-status-codes';

class ApplyController {
  public async add(req: Request, res: Response) {
    const { jobId } = req.body;
    const currentUser = req.currentUser;

    const data = await applyService.add(jobId, currentUser);

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Application submitted successfully', data });
  }

  // --------------------------

  public async getAppliedJobs(req: Request, res: Response) {
    const currentUser = req.currentUser;

    const data = await applyService.getAppliedJobs(currentUser);

    return res.status(StatusCodes.OK).json({ data });
  }
}

export const applyController: ApplyController = new ApplyController();
