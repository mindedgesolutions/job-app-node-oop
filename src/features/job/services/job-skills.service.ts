import { NotFoundException } from '@/globals/core/error.core';
import { jobService } from './job.service';
import { prisma } from '@/prisma';
import slugify from 'slugify';

class JobSkillsService {
  public async add(skillName: string, jobId: number, currentUser: UserPayload) {
    const check = jobService.jobExistsByUserIdJobId(
      Number(currentUser.id),
      jobId,
    );

    if (!check) throw new NotFoundException('Job not found');

    let data = {};

    prisma.$transaction(async (tx) => {
      const slug = slugify(skillName, { lower: true });

      const skill = await tx.skill.upsert({
        where: { slug },
        update: { name: skillName.trim() },
        create: { name: skillName.trim(), slug },
        select: { id: true },
      });

      const check = await tx.jobSkill.findFirst({
        where: { jobId, skillId: skill.id },
      });

      if (!check) {
        data = await tx.jobSkill.create({
          data: { jobId, skillId: skill.id },
        });
      }
    });

    return data;
  }
}

export const jobSkillsService: JobSkillsService = new JobSkillsService();
