import { Request, Response } from 'express';
import { jobService } from '@/job/services/job.service';
import { StatusCodes } from 'http-status-codes';

class JobController {
  public async create(req: Request, res: Response) {
    const data = await jobService.create(req.body, req.currentUser);

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Job created successfully', data });
  }

  // ---------------------------------

  public async readAll(req: Request, res: Response) {
    let { page = 1, limit = 10, f = '' } = req.query;

    page = Math.max(Number(page) || 1, 1);
    limit = Number(limit);

    const { data, meta } = await jobService.readAll({
      page,
      limit,
      filter: f as string,
    });

    res.status(StatusCodes.OK).json({ data, meta });
  }

  // --------------------------------

  public async readOne(req: Request, res: Response) {
    const { jobId } = req.params;

    const data = await jobService.readOne(Number(jobId));

    res.status(StatusCodes.OK).json({ data });
  }

  // ---------------------------------

  public async readMyJobs(req: Request, res: Response) {
    let { page = 1, limit = 10, f = '' } = req.query;

    page = Math.max(Number(page) || 1, 1);
    limit = Number(limit);

    const { data, meta } = await jobService.readMyJobs({
      page,
      limit,
      filter: f as string,
      currentUser: req.currentUser,
    });

    res.status(StatusCodes.OK).json({ data, meta });
  }

  // --------------------------------

  public async update(req: Request, res: Response) {
    const { jobId } = req.params;
    const data = await jobService.update(
      req.body,
      Number(jobId),
      req.currentUser,
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Job updated successfully', data });
  }

  // ---------------------------------

  public async delete(req: Request, res: Response) {
    const { jobId } = req.params;

    await jobService.delete(Number(jobId));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Job deleted successfully' });
  }
}

export const jobController: JobController = new JobController();
