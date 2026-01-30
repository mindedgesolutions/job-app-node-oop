import { candidateProfileController } from '@/features/candidate-profile/controllers/candidate-profile.controller';
import { NotFoundException } from '@/globals/core/error.core';
import { prisma } from '@/prisma';

class ApplyService {
  public async add(jobId: number, currentUser: UserPayload) {
    const profileExists = await prisma.candidateProfile.findFirst({
      where: { userId: Number(currentUser.id) },
    });

    if (!profileExists)
      throw new NotFoundException('Candidate profile not found');

    const checkApplication = await prisma.apply.findFirst({
      where: {
        jobId,
        candidateProfileId: profileExists.id,
      },
    });

    if (!checkApplication) {
      const application = await prisma.apply.create({
        data: {
          jobId,
          candidateProfileId: profileExists.id,
          appliedAt: new Date(),
        },
      });
      return application;
    }

    return checkApplication;
  }

  // --------------------------

  public async getAppliedJobs(currentUser: UserPayload) {
    const profileId = await prisma.candidateProfile.findFirst({
      where: { userId: Number(currentUser.id) },
      select: { id: true },
    });

    if (!profileId) throw new NotFoundException('Candidate profile not found');

    const jobs = await prisma.apply.findMany({
      where: { candidateProfileId: Number(profileId.id) },
      include: {
        candidate: { select: { fullName: true } },
        job: {
          select: {
            title: true,
            company: { select: { name: true } },
          },
        },
      },
    });

    return jobs;
  }
}

export const applyService: ApplyService = new ApplyService();
