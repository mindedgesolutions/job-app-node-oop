import { Request, Response } from 'express';
import { jobSkillsService } from '../services/job-skills.service';
import { StatusCodes } from 'http-status-codes';
import { BadRequestException } from '@/globals/core/error.core';

class JobSkillsController {
  public async add(req: Request, res: Response) {
    const { skillName, jobId } = req.body;
    const currentUser = req.currentUser;

    const data = await jobSkillsService.add(
      skillName,
      Number(jobId),
      currentUser,
    );

    if (!data) throw new BadRequestException('Failed to add skill to job');

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Skill added to job successfully', data });
  }
}

export const jobSkillsController: JobSkillsController =
  new JobSkillsController();
