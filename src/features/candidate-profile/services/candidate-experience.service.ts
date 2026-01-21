import { CandidateProfile } from 'generated/prisma';
import { candidateProfileService } from '@/candidate/services/candidate-profile.service';
import { prisma } from '@/prisma';
import { CandidateExperienceDTO } from '@/candidate/interfaces/candidate-experience.interface';

class CandidateExperienceService {
  public async create(
    requestBody: CandidateExperienceDTO,
    currentUser: UserPayload,
  ) {
    const {
      company,
      department,
      responsibilities,
      startDate,
      endDate,
      currentlyWorking,
    } = requestBody;

    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const data = await prisma.candidateExperience.create({
      data: {
        candidateProfileId: candidateProfile.id,
        company,
        department,
        responsibilities,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        currentlyWorking,
      },
    });

    return data;
  }

  // -------------------------------

  public async readAll() {
    const data = await prisma.candidateExperience.findMany();

    return data;
  }

  // -------------------------------

  public async readCandidateExperience(currentUser: UserPayload) {
    const candidateProfile: CandidateProfile =
      await candidateProfileService.readOneByUserId(Number(currentUser.id));

    const data = await prisma.candidateExperience.findMany({
      where: {
        candidateProfileId: candidateProfile.id,
      },
    });

    return data;
  }

  // -------------------------------

  public async update(requestBody: CandidateExperienceDTO, expId: number) {
    const {
      company,
      department,
      responsibilities,
      startDate,
      endDate,
      currentlyWorking,
    } = requestBody;

    const data = await prisma.candidateExperience.update({
      where: { id: expId },
      data: {
        company,
        department,
        responsibilities,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        currentlyWorking,
      },
    });

    return data;
  }

  // -------------------------------

  public async delete(expId: number) {
    await prisma.candidateExperience.delete({
      where: { id: expId },
    });

    return;
  }
}

export const candidateExperienceService: CandidateExperienceService =
  new CandidateExperienceService();
