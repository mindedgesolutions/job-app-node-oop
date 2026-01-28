import { Request, Response } from 'express';
import { jobRoleService } from '../services/job-role.service';
import { StatusCodes } from 'http-status-codes';
import { number } from 'joi';

class JobRoleController {
  public async add(req: Request, res: Response) {
    const data = await jobRoleService.add(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Job role created successfully', data });
  }

  // ---------------------------------

  public async readAll(req: Request, res: Response) {
    let { page = 1, limit = 8, f = '' } = req.query;

    page = Math.max(Number(page) || 1, 1);
    limit = Number(limit);
    const filter = String(f);

    const data = await jobRoleService.readAll({ page, limit, filter });

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Job roles fetched successfully', data });
  }

  // ---------------------------------

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await jobRoleService.delete(Number(id));

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Job role deleted successfully' });
  }
}

export const jobRoleController: JobRoleController = new JobRoleController();
